# Deployment Guide - Coral Cove

## ✅ Completed Steps

1. **Git Repository Initialized** ✓
   - Repository initialized with proper .gitignore
   - Initial commit created with all project files
   - Pushed to: https://github.com/Elvin-IT/coral_cove

2. **Project Configuration Ready** ✓
   - `package.json` updated with project metadata
   - `vercel.json` created with Vite build configuration
   - `.env.example` configured with required variables

## 🚀 Next Steps: Deploy to Vercel

### Option 1: Automatic Vercel Deployment (Recommended)

1. **Visit Vercel Dashboard**
   - Go to https://vercel.com/dashboard
   - Sign in with GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `coral_cove` from your repositories
   - Click "Import"

3. **Configure Environment Variables**
   - In the "Environment Variables" section, add:
     - **GEMINI_API_KEY**: Your Google Gemini API key
     - **APP_URL**: Leave as default or update for production URL
   
4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at a Vercel URL (e.g., `coral-cove.vercel.app`)

### Option 2: Command Line Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your GitHub account and project

## 📋 Required Environment Variables for Production

When deploying to Vercel, ensure these variables are set:

- **GEMINI_API_KEY**: Your Google Generative AI API key
  - Get it from: https://aistudio.google.com/app/apikey
  
- **APP_URL**: Your production domain
  - Default on Vercel: `https://your-project.vercel.app`

## 🔧 Build Configuration

The project uses:
- **Framework**: Vite (React)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Development Command**: `npm run dev`

Vercel will automatically detect and use these settings from `vercel.json`.

## 📚 Project Structure

```
coral_cove/
├── src/
│   ├── components/      # React components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── ...
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel deployment config
├── package.json        # Dependencies & scripts
└── tsconfig.json       # TypeScript configuration
```

## 📖 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Gemini API**: https://ai.google.dev

## ✨ Development Workflow

### Local Development
```bash
npm install
npm run dev
# Access at http://localhost:3000
```

### Building for Production
```bash
npm run build
npm run preview
```

### Type Checking
```bash
npm run lint
```

## 🎯 After Deployment

1. **Test Production Build**
   - Visit your Vercel URL
   - Verify all features work correctly
   - Check console for errors

2. **Set Up Custom Domain (Optional)**
   - In Vercel project settings
   - Go to "Domains"
   - Add your custom domain

3. **Monitor Deployments**
   - Use Vercel Analytics
   - Check deployment logs for errors
   - Monitor API usage (Gemini API)

## 🆘 Troubleshooting

### Build Fails
- Check logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `npm run build` works locally

### API Key Issues
- Verify GEMINI_API_KEY is correctly set
- Check API key is active: https://aistudio.google.com/app/apikey
- API key must have proper permissions

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Optimize images in `src/assets/images/`
- Check network requests in DevTools

---

**Repository**: https://github.com/Elvin-IT/coral_cove  
**Status**: Ready for Vercel deployment ✓
