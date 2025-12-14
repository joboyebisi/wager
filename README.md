# WagerSidus

A decentralized wager platform built with Next.js, enabling users to create, accept, and resolve wagers on the BNB Chain.

## Features

- 🎲 **Create Wagers**: Set up wagers with custom terms and conditions
- 💰 **Gasless Transactions**: Meta-transactions for seamless user experience
- 🔗 **Cross-Chain Swaps**: Uniswap and Wormhole integration for token swaps
- 📱 **Telegram Bot**: Manage wagers via Telegram
- 🤖 **AI Integration**: Natural language processing for wager creation
- 📊 **Real-time Updates**: Live wager status and notifications

## Tech Stack

- **Framework**: Next.js 15.5.7
- **Blockchain**: BNB Chain (BSC Testnet)
- **Wallet**: Privy
- **Database**: Supabase
- **Smart Contracts**: Solidity (Hardhat)
- **Styling**: CSS Modules

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm or yarn
- BNB Chain wallet (MetaMask recommended)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd WagerSidus-Clean
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps --force
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_DEEPSEEK_API_KEY=your_deepseek_key
NEXT_PUBLIC_SIDUS_AI_API_KEY=your_sidus_key
NEXT_PUBLIC_BNB_CHAIN_ID=97
NEXT_PUBLIC_RPC_URL=your_bsc_rpc_url
NEXT_PUBLIC_WAGER_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_WEBHOOK_URL=your_webhook_url
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel

This project is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

**Important**: Ensure the Root Directory is set to `.` (empty/root) in Vercel project settings.

## Project Structure

```
WagerSidus-Clean/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   ├── wagers/             # Wager pages
│   └── ...
├── components/             # React components
├── lib/                    # Utilities and services
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Business logic services
│   └── utils/               # Helper functions
├── contracts/              # Smart contracts
├── scripts/                # Build and utility scripts
└── types/                  # TypeScript type definitions
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT

