# Netlify Deployment Guide

## Quick Start

1. **Go to Netlify**: https://app.netlify.com
2. **Sign up/Login** with your GitHub account
3. **Add new site** → **Import an existing project**
4. **Connect GitHub** and authorize Netlify
5. **Select repository**: `joboyebisi/wager`
6. **Configure build settings** (should auto-detect from `netlify.toml`):
   - Build command: `npm install --legacy-peer-deps --force && npm run build`
   - Publish directory: `.next`
   - Node version: `22`
7. **Add environment variables** (see below)
8. **Deploy site**

## Environment Variables

Add these in Netlify Dashboard → Site Settings → Environment Variables:

```
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_PRIVY_APP_SECRET=your_privy_app_secret
NEXT_PUBLIC_BNB_CHAIN_ID=97
NEXT_PUBLIC_RPC_URL=https://bsc-testnet-rpc.publicnode.com/
NEXT_PUBLIC_WAGER_CONTRACT_ADDRESS=0xd8D86eCc3d2EFb0939611926c80DC8917440d776
NEXT_PUBLIC_PERPLEXITY_API_KEY=your_perplexity_key
NEXT_PUBLIC_DEEPSEEK_API_KEY=your_deepseek_key
NEXT_PUBLIC_COINMARKETCAP_API_KEY=your_coinmarketcap_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_WEBHOOK_URL=your_netlify_url/api/telegram/webhook
NEXT_PUBLIC_APP_URL=your_netlify_url
```

**Note**: After deployment, update `TELEGRAM_WEBHOOK_URL` and `NEXT_PUBLIC_APP_URL` with your actual Netlify URL.

## Configuration

The project is configured via `netlify.toml`:
- Uses Next.js plugin for optimal Next.js support
- Node.js 22
- Legacy peer deps for dependency compatibility
- Proper build and publish directories

## Post-Deployment

1. **Update Telegram Webhook**: 
   - Get your Netlify URL (e.g., `https://your-site.netlify.app`)
   - Update `TELEGRAM_WEBHOOK_URL` to `https://your-site.netlify.app/api/telegram/webhook`
   - Update `NEXT_PUBLIC_APP_URL` to your Netlify URL

2. **Set Telegram Webhook**:
   ```bash
   curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://your-site.netlify.app/api/telegram/webhook"
   ```

## Troubleshooting

- **Build fails**: Check build logs in Netlify dashboard
- **Environment variables**: Ensure all are set correctly
- **Webhook issues**: Verify the webhook URL is accessible

## Advantages of Netlify

- Better Next.js support
- No framework detection issues
- Automatic HTTPS
- Easy environment variable management
- Built-in CI/CD

