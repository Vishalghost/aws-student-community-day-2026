# Deployment Guide - AWS Student Community Day Chennai 2026

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vishalghost/aws-student-community-day-2026-test-website)

### Option 2: Manual Vercel Deployment

1. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your GitHub repository: `aws-student-community-day-2026-test-website`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables** (if needed)
   - No environment variables required for basic deployment

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://your-project.vercel.app`

## 🐳 Docker Deployment

### Build and Run Locally

```bash
# Build the Docker image
docker build -t aws-community-day .

# Run the container
docker run -p 3000:3000 aws-community-day
```

Visit `http://localhost:3000`

### Using Docker Compose

```bash
# Start the application
docker-compose up

# Run in detached mode
docker-compose up -d

# Stop the application
docker-compose down
```

### Deploy to Cloud Platforms

#### Deploy to AWS ECS/Fargate

1. **Push to ECR**
```bash
# Authenticate to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ECR_URI

# Tag image
docker tag aws-community-day:latest YOUR_ECR_URI/aws-community-day:latest

# Push image
docker push YOUR_ECR_URI/aws-community-day:latest
```

2. **Create ECS Task Definition** with the pushed image
3. **Create ECS Service** using the task definition

#### Deploy to Google Cloud Run

```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/aws-community-day

# Deploy to Cloud Run
gcloud run deploy aws-community-day \
  --image gcr.io/YOUR_PROJECT_ID/aws-community-day \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### Deploy to Azure Container Instances

```bash
# Login to Azure
az login

# Create resource group
az group create --name aws-community-rg --location eastus

# Create container registry
az acr create --resource-group aws-community-rg --name awscommunityacr --sku Basic

# Build and push
az acr build --registry awscommunityacr --image aws-community-day:latest .

# Deploy
az container create \
  --resource-group aws-community-rg \
  --name aws-community-day \
  --image awscommunityacr.azurecr.io/aws-community-day:latest \
  --dns-name-label aws-community-day \
  --ports 3000
```

## 📦 Static Export (Alternative)

If you prefer static hosting (Netlify, GitHub Pages, etc.):

1. **Update `next.config.js`**
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. **Build**
```bash
npm run build
```

3. **Deploy the `out/` folder** to your static host

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

### GitHub Pages

```bash
# Add to package.json scripts
"deploy": "next build && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"

# Run
npm run deploy
```

## 🔧 Custom Domain Setup

### Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate provisioning

### Docker with Nginx Reverse Proxy

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🌍 Environment Variables

For production deployments, you may want to set:

```bash
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

## 📊 Performance Optimization

### Vercel Recommendations
- ✅ Automatic image optimization
- ✅ Edge caching
- ✅ Automatic HTTPS
- ✅ Global CDN

### Docker Optimization
- Multi-stage builds (already implemented)
- Standalone output mode (already configured)
- Image optimization disabled for Docker compatibility

## 🔍 Monitoring

### Vercel Analytics

Add to your project:

```bash
npm install @vercel/analytics
```

Update `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🆘 Troubleshooting

### Build Fails

1. **Clear cache**
```bash
rm -rf .next node_modules
npm install
npm run build
```

2. **Check Node version**
```bash
node --version  # Should be 18+
```

### Docker Issues

1. **Port already in use**
```bash
docker run -p 8080:3000 aws-community-day
```

2. **Permission denied**
```bash
sudo docker build -t aws-community-day .
```

### Vercel Deployment Issues

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify `next.config.js` is correct

## 📞 Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Check [Vercel Docs](https://vercel.com/docs)
- Check [Docker Docs](https://docs.docker.com/)

---

**Happy Deploying! 🚀**
