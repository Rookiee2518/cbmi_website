# Deployment Guide - Figma Make Code to Vercel

Simple guide to deploy your Figma Make React + Vite app to Vercel production.

## Commands Used

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Vercel CLI
```bash
npm install -g vercel
```

### 3. Login to Vercel
```bash
vercel login
```
*(Opens browser for authentication)*

### 4. Deploy to Production
```bash
vercel --prod
```

### 5. Redeploy After Changes
```bash
vercel --prod
```

## Files Created

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### `.gitignore`
- Excludes `node_modules/`, `build/`, `.vercel`, etc.

## Fixes Applied

1. **Project Name:** Changed `"Mining website"` to `"mining-website"` in `package.json`
   - Vercel requires lowercase names with hyphens

2. **Scroll to Top:** Added `ScrollToTop` component to fix navigation scroll issue

## Production URL

**Live Site:** https://mining-website-mu.vercel.app

## Quick Reference

- **Test locally:** `npm run dev`
- **Build locally:** `npm run build`
- **Deploy:** `vercel --prod`
- **View deployments:** `vercel ls`
- **View projects:** `vercel project ls`
