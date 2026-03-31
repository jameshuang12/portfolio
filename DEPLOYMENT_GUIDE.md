# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- Git installed and configured
- GitHub account
- Repository: `jameshuang12/portfolio`

## Deployment Steps

### Quick Deploy (Recommended)

The easiest way to deploy is using the built-in deploy script:

```bash
# Deploy to GitHub Pages in one command
npm run deploy
```

This will:
1. Build the production site
2. Create the `out` directory with optimized static files
3. Add `.nojekyll` file (required for GitHub Pages)
4. Deploy to the `gh-pages` branch automatically

### Manual Deployment Steps

If you prefer to deploy manually:

### 1. Build the Static Site

```bash
npm run build
```

This creates an `out` directory with static HTML files optimized for GitHub Pages.

### 2. Verify the Build

Check that the `out` directory was created successfully:
```bash
ls -la out/
```

You should see:
- `index.html`
- `_next/` directory
- Other static assets

### 3. Test Locally (Optional)

You can test the production build locally:
```bash
npx serve out
```

Then visit `http://localhost:3000` to verify everything works.

### 4. Commit Your Changes

```bash
# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update portfolio content"

# Push to main branch
git push origin main
```

### 5. Deploy to gh-pages Branch

```bash
# Use the deploy script
npm run deploy
```

OR manually:
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy
npx gh-pages -d out -t true
```

### 6. Configure GitHub Pages (One-time Setup)

1. Go to your repository: https://github.com/jameshuang12/portfolio
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/` (root)
5. Click **Save**

**Important:** GitHub Pages must be configured to deploy from the `gh-pages` branch, not `main`.

### 7. Wait for Deployment

GitHub Pages will automatically build and deploy your site. This usually takes 1-3 minutes.

You can check the deployment status:
1. Go to the **Actions** tab in your repository
2. Look for the latest workflow run
3. Wait for it to complete (green checkmark)

### 8. Access Your Live Site

Your portfolio will be live at:
**https://jameshuang12.github.io/portfolio/**

## Troubleshooting

### Issue: 404 Page Not Found

**Solution**: Make sure GitHub Pages is configured to use the `main` branch and `/` (root) folder.

### Issue: Styles Not Loading

**Solution**: The `basePath` in `next.config.js` is set to `/portfolio` for production. This is correct for GitHub Pages.

### Issue: Images Not Showing

**Solution**: 
1. Ensure images are in `public/images/`
2. Check that paths in data files use the correct format
3. The `getAssetPath` utility handles development vs production paths automatically

### Issue: Build Fails

**Solution**:
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

## Updating Your Portfolio

After making changes:

```bash
# 1. Make your changes to data files or components

# 2. Test locally
npm run dev

# 3. Commit your changes to main branch
git add .
git commit -m "Update portfolio content"
git push origin main

# 4. Deploy to GitHub Pages
npm run deploy

# 5. Wait 1-2 minutes for deployment to complete
```

The `npm run deploy` command will:
- Build the production site
- Deploy to the `gh-pages` branch
- GitHub Pages will automatically serve the updated site

## Custom Domain (Optional)

To use a custom domain:

1. Buy a domain from a registrar (e.g., Namecheap, Google Domains)
2. Add a `CNAME` file to the `public` directory with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS records at your registrar:
   - Type: `CNAME`
   - Name: `www` (or `@` for apex domain)
   - Value: `jameshuang12.github.io`
4. In GitHub Settings > Pages, add your custom domain
5. Enable "Enforce HTTPS"

## Automated Deployment with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

This will automatically deploy whenever you push to the `main` branch.

## Performance Optimization

Your site is already optimized with:
- ✅ Static site generation
- ✅ Optimized images (unoptimized for static export)
- ✅ Minified CSS and JavaScript
- ✅ Tree-shaking for unused code
- ✅ Code splitting

## Monitoring

To monitor your site:
1. Add Google Analytics (see main README)
2. Use GitHub's built-in traffic analytics
3. Monitor Core Web Vitals with Lighthouse

## Support

If you encounter issues:
1. Check the [Next.js Static Export documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Check the repository's Issues tab

---

**Your portfolio is ready to go live!** 🚀

Follow these steps and your modern portfolio will be accessible to the world at:
**https://jameshuang12.github.io/portfolio/**