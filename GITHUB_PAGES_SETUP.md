# GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `mining-website` (or any name you prefer)
3. **Don't** initialize with README, .gitignore, or license
4. Click "Create repository"

### 2. Push Your Code

Run these commands in your project directory:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mining-website.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your GitHub username)*

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages` or `main`
   - **Branch**: `gh-pages` (created by GitHub Actions)
   - **Folder**: `/ (root)`
4. Click **Save**

### 4. Automatic Deployment

The GitHub Actions workflow will:
- ✅ Automatically build your site when you push to `main`
- ✅ Deploy to GitHub Pages
- ✅ Your site will be live at: `https://YOUR_USERNAME.github.io/mining-website/`

## Your Site URL

After setup, your site will be available at:
- **If repo is `mining-website`:** `https://YOUR_USERNAME.github.io/mining-website/`
- **If repo is `YOUR_USERNAME.github.io`:** `https://YOUR_USERNAME.github.io/`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
npx gh-pages -d build
```

## Notes

- ✅ Uses HashRouter, so routing works on GitHub Pages
- ✅ Automatic deployment on every push to `main`
- ✅ Free hosting
- ✅ Custom domain support available

## Troubleshooting

**Site not loading?**
- Wait 1-2 minutes after pushing (deployment takes time)
- Check Actions tab for build status
- Verify Pages settings are correct

**404 errors on routes?**
- HashRouter should work fine
- If using BrowserRouter, you may need to configure base path

