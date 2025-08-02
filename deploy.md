# 🚀 Deployment Guide - Finland & Norway Travel Website

## Quick Deploy Options

### Option 1: Vercel (Recommended - 5 minutes)

1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Finland Norway travel website"
   ```
   
   Then create a new repository on GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/finland-norway-trip-2025.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Your site will be live in 2-3 minutes!

### Option 2: Netlify (Alternative)

1. **Follow the GitHub steps above**

2. **Deploy on Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

## Custom Domain Setup

### Vercel:
1. Go to project dashboard → Settings → Domains
2. Add your domain (e.g., `finland-norway-trip.com`)
3. Update DNS records as shown

### Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS instructions

## Environment Variables

No environment variables needed for this project - everything is configured to work out of the box!

## Post-Deployment

After deployment, your website will be available at:
- **Vercel**: `https://your-project-name.vercel.app`
- **Netlify**: `https://your-project-name.netlify.app`

## Features Available

✅ Interactive homepage with trip summary  
✅ Interactive map showing all destinations  
✅ Daily itinerary pages with details  
✅ Timeline view of the journey  
✅ Responsive design for all devices  
✅ Beautiful animations and transitions  
✅ Image galleries for each destination  

## Support

If you encounter any issues:
1. Check the deployment logs
2. Ensure all files are committed to GitHub
3. Verify the build command works locally: `npm run build`

Your Finland & Norway adventure website will be live and ready to share! 🌍✈️ 