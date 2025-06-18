# 🌐 WebWallet - Cross-Chain Wallet Generator

A modern, secure, and user-friendly web application for generating and managing cross-chain cryptocurrency wallets. Built with React, TypeScript, and Vite, this application allows users to create both Solana and Ethereum wallets from a single mnemonic phrase.

![WebWallet Demo](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)

## ✨ Features

- 🔐 **Secure Mnemonic Generation**: Generate cryptographically secure 12-word mnemonic phrases
- 🌉 **Cross-Chain Support**: Create wallets for both Solana and Ethereum blockchains
- 💰 **Real-Time Balance Checking**: View wallet balances in real-time using Alchemy APIs
- 🎨 **Modern UI/UX**: Beautiful gradient design with responsive layout
- 🔄 **HD Wallet Support**: Hierarchical Deterministic wallet generation following BIP-44 standards
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Development**: Built with Vite for lightning-fast development experience

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/WebWallet.git
   cd WebWallet/vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint for code quality |
| `npm run preview` | Preview production build |

## 🏗️ Project Structure

```
vite-project/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🧰 Tech Stack

### Frontend
- **React 19.0.0** - Modern UI library
- **TypeScript 5.7.2** - Type-safe JavaScript
- **Vite 6.2.0** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Blockchain Libraries
- **@solana/web3.js 1.98.0** - Solana blockchain interaction
- **ethers 6.13.5** - Ethereum blockchain interaction
- **bip39 3.1.0** - BIP-39 mnemonic generation
- **ed25519-hd-key 1.3.0** - HD key derivation
- **tweetnacl 1.0.3** - Cryptography library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🔧 Configuration

### Environment Variables

The application uses Alchemy APIs for blockchain interactions. You may need to configure your own API keys:

```env
# Solana API (Alchemy)
SOLANA_RPC_URL=https://solana-mainnet.g.alchemy.com/v2/YOUR_API_KEY

# Ethereum API (Alchemy)
ETHEREUM_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
```

### API Endpoints

- **Solana**: Uses Alchemy's Solana API for balance checking
- **Ethereum**: Uses Alchemy's Ethereum API for balance checking

## 📖 Usage Guide

### 1. Generate Mnemonic
- Click the "Generate New Mnemonic" button
- A secure 12-word mnemonic phrase will be generated
- **Important**: Save this mnemonic securely - it's the key to your wallets!

### 2. Create Solana Wallet
- Click "Add Solana Wallet" to generate a new Solana wallet
- The wallet address and balance will be displayed
- Multiple wallets can be generated from the same mnemonic

### 3. Create Ethereum Wallet
- Click "Add Ethereum Wallet" to generate a new Ethereum wallet
- The wallet address and balance will be displayed
- Multiple wallets can be generated from the same mnemonic

### 4. View Wallets
- All generated wallets are displayed in separate sections
- Real-time balances are shown for each wallet
- Wallet addresses are displayed in a readable format

## 🔒 Security Features

- **Cryptographically Secure**: Uses industry-standard libraries for key generation
- **HD Wallet Support**: Follows BIP-44 standards for deterministic wallet generation
- **Client-Side Only**: All operations happen in the browser, no server-side storage
- **No Data Persistence**: Wallet data is not stored, ensuring privacy

## 🚨 Security Considerations

⚠️ **Important Security Notes:**

1. **Never share your mnemonic phrase** - Anyone with access to it can control your wallets
2. **Use in a secure environment** - Avoid using on public computers or networks
3. **Backup your mnemonic** - Store it securely offline (paper wallet, hardware wallet)
4. **Test with small amounts** - Always test with small amounts before transferring significant funds
5. **This is a demo application** - For production use, consider additional security measures

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Solana Labs](https://solana.com/) for the Solana Web3.js library
- [Ethers.js](https://docs.ethers.io/) for Ethereum interaction
- [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) for mnemonic standards
- [Alchemy](https://www.alchemy.com/) for blockchain APIs

## 📞 Support

If you encounter any issues or have questions:

- Create an [Issue](https://github.com/yourusername/WebWallet/issues)
- Check the [Documentation](https://github.com/yourusername/WebWallet/wiki)
- Contact the maintainers

## 🔄 Version History

- **v1.0.0** - Initial release with Solana and Ethereum wallet support
- Cross-chain wallet generation
- Real-time balance checking
- Modern responsive UI

---

**Disclaimer**: This software is provided "as is" without warranty. Cryptocurrency transactions are irreversible. Always double-check addresses and amounts before sending funds.

Made with ❤️ for the blockchain community
