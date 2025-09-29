# Quick Setup Guide

This guide will help you set up your local development environment and deploy the MKDocs site.

## Prerequisites Check

Before starting, verify you have:

```bash
# Check Python version (need 3.11+)
python --version

# Check pip
pip --version

# Check git
git --version
```

## 1. Local Development Setup (5 minutes)

```bash
# Clone repository (if not already cloned)
git clone git@github.com:woxingma/woxingma.github.io.git
cd woxingma.github.io

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On macOS/Linux:
source .venv/bin/activate
# On Windows:
# .venv\Scripts\activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Verify installation
mkdocs --version
```

## 2. Test Locally (2 minutes)

```bash
# Start development server
mkdocs serve

# Open browser to: http://127.0.0.1:8000
# Site will auto-reload when you make changes
```

## 3. Deploy to GitHub Pages (1 minute)

### Option A: Automatic Deployment (Recommended)

Just push to main branch - GitHub Actions handles everything:

```bash
git add .
git commit -m "Initial MKDocs deployment"
git push origin main
```

Watch deployment at: https://github.com/woxingma/woxingma.github.io/actions

### Option B: Manual Deployment

```bash
# Deploy directly using MKDocs
mkdocs gh-deploy --force --clean --verbose
```

## 4. Verify Deployment

After deployment completes (2-3 minutes):

- Production site: https://www.onyxultrasonics.co.uk
- GitHub Pages: https://woxingma.github.io/woxingma.github.io

## Troubleshooting

### "mkdocs: command not found"

```bash
# Make sure virtual environment is activated
source .venv/bin/activate

# Reinstall if needed
pip install -r requirements.txt
```

### Build fails locally

```bash
# Run strict build to see detailed errors
mkdocs build --clean --strict --verbose
```

### GitHub Pages not updating

1. Check GitHub Actions workflow passed
2. Verify gh-pages branch exists
3. Check repository Settings → Pages → Source is set to gh-pages branch
4. Wait 1-2 minutes for CDN cache

## Next Steps

- Read full documentation in [README.md](README.md)
- Review site content in `docs/` directory
- Customize styling in `docs/assets/stylesheets/extra.css`
- Check GitHub Actions results at repository Actions tab

## Common Commands

```bash
# Development
mkdocs serve              # Start dev server
mkdocs build              # Build site
mkdocs build --strict     # Build with warnings as errors

# Deployment
mkdocs gh-deploy          # Deploy to GitHub Pages
git push origin main      # Trigger automatic deployment

# Validation
markdownlint-cli2 "docs/**/*.md"  # Lint markdown
python -m mkdocs build --strict   # Validate build
```

## Support

For issues or questions:

- Check [README.md](README.md) for detailed documentation
- Review GitHub Actions logs for deployment issues
- Open an issue on GitHub repository

---

**Setup Time**: ~10 minutes total
**Deployment Time**: 2-3 minutes automatic