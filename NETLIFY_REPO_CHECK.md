# Netlify Repository Configuration

## Current Repository

**GitHub Repository**: `joboyebisi/wager`  
**Branch**: `main`  
**Location**: `C:\Users\Deborah\Documents\Cursor Projects\WagerSidus-Clean`

## How to Verify in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** → **Build & Deploy** → **Continuous Deployment**
3. Check the following:

### Connected Repository
- Should show: `joboyebisi/wager`
- If it shows `joboyebisi/wagerx`, you need to:
  1. Disconnect the old repository
  2. Connect the new repository `joboyebisi/wager`

### Production Branch
- Should be: `main`

### Build Settings
- Build command: `npm install --legacy-peer-deps --force` (from netlify.toml)
- Publish directory: `.next` (from netlify.toml)
- Base directory: (leave empty/root)

## If You Need to Change Repository

1. Go to **Site Settings** → **Build & Deploy** → **Continuous Deployment**
2. Click **Disconnect repository**
3. Click **Connect to Git provider**
4. Select **GitHub**
5. Choose repository: `joboyebisi/wager`
6. Select branch: `main`
7. Netlify will auto-detect settings from `netlify.toml`

## Important Notes

- **DO NOT** use `joboyebisi/wagerx` (old repo with issues)
- **USE** `joboyebisi/wager` (new clean repo)
- The clean repo has the correct structure and configuration

