import { Keypair, PublicKey, Connection } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Wallet, HDNodeWallet, JsonRpcProvider } from "ethers";
import { useState } from "react";
import nacl from "tweetnacl";

export default function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [walletSol, setWalletSol] = useState<{ address: PublicKey; balance: number }[]>([]);
  const [current, setCurrent] = useState(0);
  const [walletEther, setWalletEther] = useState<{ address: string; balance: string }[]>([]);

  async function generateMnemonics() {
    const mn = await generateMnemonic(128);
    setMnemonic(mn);
  }

  async function generateSolana() {
    const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/cym50KbOd8JsNJSk2mMLlsCbJIkExt6w");

    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${current}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    const balance = await connection.getBalance(keypair.publicKey);

    setCurrent(current + 1);
    setWalletSol([...walletSol, { address: keypair.publicKey, balance }]);
  }

  async function generateEther() {
    const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/cym50KbOd8JsNJSk2mMLlsCbJIkExt6w");

    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/60'/${current}'/0`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const derivedSeed = hdNode.derivePath(path);
    const privatekey = derivedSeed.privateKey;
    const wallet = new Wallet(privatekey);

    const balance = await provider.getBalance(wallet.address);

    setCurrent(current + 1);
    setWalletEther([...walletEther, { address: wallet.address, balance: balance.toString() }]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-950 to-gray-900 text-white px-6 py-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Cross-Chain Wallet Generator
          </h1>
          <p className="text-gray-400 mt-2">Generate and view your Solana and Ethereum wallets from a single mnemonic.</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button onClick={generateMnemonics} className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-xl transition duration-300">
            Generate New Mnemonic
          </button>
          {mnemonic && (
            <p className="bg-gray-800 rounded-xl p-4 text-sm text-center text-gray-300 w-full md:w-2/3">
              {mnemonic}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button onClick={generateSolana} className="bg-purple-700 hover:bg-purple-800 px-6 py-2 rounded-xl text-white font-semibold transition duration-300">
            Add Solana Wallet
          </button>
          <button onClick={generateEther} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white font-semibold transition duration-300">
            Add Ethereum Wallet
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-850 rounded-2xl p-6 shadow-lg border border-purple-700">
            <h2 className="text-xl font-bold mb-4 text-purple-400">Solana Wallets</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {walletSol.map((wallet, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-xl border border-purple-600">
                  <p className="text-xs break-all text-gray-200">Address: {wallet.address.toBase58()}</p>
                  <p className="text-xs text-gray-400 mt-1">Balance: {(wallet.balance / 1e9).toFixed(4)} SOL</p>
                </div>
              ))}
              {walletSol.length === 0 && <p className="text-sm text-gray-500">No Solana wallets yet.</p>}
            </div>
          </div>

          <div className="bg-gray-850 rounded-2xl p-6 shadow-lg border border-blue-700">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Ethereum Wallets</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {walletEther.map((wallet, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-xl border border-blue-600">
                  <p className="text-xs break-all text-gray-200">Address: {wallet.address}</p>
                  <p className="text-xs text-gray-400 mt-1">Balance: {(parseFloat(wallet.balance) / 1e18).toFixed(4)} ETH</p>
                </div>
              ))}
              {walletEther.length === 0 && <p className="text-sm text-gray-500">No Ethereum wallets yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
