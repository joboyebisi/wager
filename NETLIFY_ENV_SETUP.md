# Netlify Environment Variables Setup

## Quick Setup Guide

### Option 1: Manual Entry (Recommended)

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** → **Environment Variables**
3. Click **Add a variable** for each variable below
4. Copy the variable name and value from `netlify-env-vars.txt`
5. Set scope to **All scopes** (Production, Deploy Previews, Branch Deploys)

### Option 2: Bulk Import (if available)

Some Netlify plans support bulk import. Check if your dashboard has an "Import" option.

## Required Variables

Copy these from `netlify-env-vars.txt`:

### Wallet & Authentication
- `NEXT_PUBLIC_PRIVY_APP_ID`
- `NEXT_PUBLIC_PRIVY_APP_SECRET`

### Blockchain Configuration
- `NEXT_PUBLIC_BNB_CHAIN_ID`
- `NEXT_PUBLIC_RPC_URL`
- `NEXT_PUBLIC_WAGER_CONTRACT_ADDRESS`

### AI Services
- `NEXT_PUBLIC_PERPLEXITY_API_KEY`
- `NEXT_PUBLIC_DEEPSEEK_API_KEY`

### Data Verification
- `NEXT_PUBLIC_COINMARKETCAP_API_KEY`

### Database (Supabase)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Telegram Bot
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_WEBHOOK_URL` (update after deployment)
- `NEXT_PUBLIC_APP_URL` (update after deployment)

### Server-side
- `PRIVATE_KEY`

### Circle (Optional)
- `CIRCLE_API_KEY`
- `CIRCLE_ENTITY_ID`
- `CIRCLE_ENTITY_SECRET`
- `CIRCLE_ENVIRONMENT`

### Development
- `NODE_ENV=production`

## After First Deployment

1. Get your Netlify URL (e.g., `https://your-site.netlify.app`)
2. Update these variables in Netlify Dashboard:
   - `TELEGRAM_WEBHOOK_URL` → `https://your-site.netlify.app/api/telegram/webhook`
   - `NEXT_PUBLIC_APP_URL` → `https://your-site.netlify.app`
3. Redeploy or trigger a new deployment

## Setting Telegram Webhook

After deployment, set the webhook:

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://your-site.netlify.app/api/telegram/webhook"
```

Replace `<YOUR_BOT_TOKEN>` with your actual bot token.

