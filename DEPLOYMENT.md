# Deployment Guide for GradientWorks Website

## Quick Start

Your website is ready to deploy! Here's how to get it live on GitHub Pages.

## Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: GradientWorks website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `gradientworks`
2. **Do not** initialize with README, .gitignore, or license (we already have these)

## Step 3: Push to GitHub

Replace `yourusername` with your actual GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/yourusername/gradientworks.git
git push -u origin main
```

## Step 4: Configure GitHub Pages

### Option A: Using GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that will automatically deploy your site.

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions
4. The workflow will automatically run on every push to main

Your site will be available at: `https://yourusername.github.io/gradientworks/`

### Option B: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
npm run deploy
```

Then configure GitHub Pages:
1. Go to **Settings** → **Pages**
2. Under **Source**, select: **Deploy from a branch**
3. Select branch: **gh-pages** and folder: **/ (root)**
4. Click **Save**

## Step 5: Update Base Path (if needed)

If your repository name is different from `gradientworks`, update the base path in [vite.config.ts](vite.config.ts):

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

## Using a Custom Domain

1. Create a file named `CNAME` in the `public` folder (create the folder if it doesn't exist):
   ```bash
   mkdir -p public
   echo "www.gradientwork.com" > public/CNAME
   ```

2. Configure DNS at your domain registrar:
   - For apex domain (gradientwork.com):
     - Create A records pointing to:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
   - For subdomain (www.gradientwork.com):
     - Create CNAME record pointing to: `yourusername.github.io`

3. In GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable **Enforce HTTPS**

## Updating the Site

After making changes:

### Using GitHub Actions:
```bash
git add .
git commit -m "Your commit message"
git push
```

The site will automatically rebuild and deploy.

### Using gh-pages:
```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

## Troubleshooting

### Build Fails
- Check the Actions tab on GitHub for error details
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### 404 Errors
- Verify the `base` path in vite.config.ts matches your repository name
- Ensure GitHub Pages is enabled and source is configured correctly

### Blank Page
- Check browser console for errors
- Verify assets are loading with correct paths
- Clear browser cache and try again

### Custom Domain Not Working
- Allow 24-48 hours for DNS changes to propagate
- Verify CNAME file is in the `public` folder
- Check DNS configuration at your registrar

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact Form Setup

The contact form currently uses `mailto:` links. For production, consider integrating a form service:

1. **Formspree** (https://formspree.io/)
   - Free tier available
   - Easy setup, just update form action

2. **Web3Forms** (https://web3forms.com/)
   - Completely free
   - No backend required

3. **getform.io** (https://getform.io/)
   - Free tier with 50 submissions/month

Update the form in [src/components/Contact.tsx](src/components/Contact.tsx) to use your chosen service.

## Need Help?

- Check the [README.md](README.md) for more details
- GitHub Pages Documentation: https://docs.github.com/pages
- Vite Documentation: https://vitejs.dev
