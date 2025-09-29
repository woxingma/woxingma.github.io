# Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment Checks

### 1. Local Testing

- [ ] Virtual environment created and activated
- [ ] Dependencies installed (`pip install -r requirements.txt`)
- [ ] Site builds without errors (`mkdocs build --clean --strict`)
- [ ] Site runs locally (`mkdocs serve`)
- [ ] All pages accessible via navigation
- [ ] Images load correctly
- [ ] Search functionality works
- [ ] Dark/light mode toggle works

### 2. Content Review

- [ ] All markdown files pass linting (`markdownlint-cli2 "docs/**/*.md"`)
- [ ] No broken internal links
- [ ] No missing images
- [ ] No TODO/FIXME items remaining (or documented as intentional)
- [ ] Contact information up to date
- [ ] Copyright year correct
- [ ] Company information accurate

### 3. Configuration Validation

- [ ] `mkdocs.yml` is valid YAML
- [ ] `site_url` is correct (https://www.onyxultrasonics.co.uk)
- [ ] `repo_url` is correct
- [ ] Navigation structure is logical
- [ ] All plugins are necessary and configured
- [ ] Custom CSS/JS files referenced correctly

### 4. GitHub Configuration

- [ ] Repository Settings → Pages → Source set to `gh-pages` branch
- [ ] Custom domain configured in repository settings
- [ ] CNAME file present in repository root
- [ ] Repository is public (or Pages enabled for private repos)
- [ ] GitHub Actions enabled in repository

### 5. Git Status

- [ ] All new files staged for commit
- [ ] Old files (index.html, bw_onyx.png) removed
- [ ] .gitignore properly configured
- [ ] Virtual environment not committed
- [ ] site/ directory not committed

## Deployment Steps

### Option A: Automatic Deployment (Recommended)

```bash
# 1. Stage all files
git add .

# 2. Commit with descriptive message
git commit -m "Deploy MKDocs documentation site with Material theme

- Complete MKDocs site with 11 pages
- Material theme with custom styling
- Comprehensive CI/CD pipeline
- Full linting and validation
- Migrated from simple HTML site"

# 3. Push to main branch
git push origin main

# 4. Monitor GitHub Actions
# Visit: https://github.com/woxingma/woxingma.github.io/actions
```

### Option B: Manual Deployment

```bash
# Deploy directly using MKDocs
mkdocs gh-deploy --force --clean --verbose
```

## Post-Deployment Verification

### Immediate Checks (2-3 minutes after deployment)

- [ ] GitHub Actions workflow completed successfully
- [ ] gh-pages branch updated with latest content
- [ ] Site accessible at https://www.onyxultrasonics.co.uk
- [ ] Site accessible at https://woxingma.github.io/woxingma.github.io
- [ ] Custom domain resolves correctly
- [ ] HTTPS certificate active

### Functionality Checks

- [ ] Homepage loads correctly
- [ ] Navigation works (all tabs and links)
- [ ] Search functionality works
- [ ] All pages load without 404 errors
- [ ] Images display correctly
- [ ] CSS styling applied
- [ ] JavaScript features work
- [ ] Dark/light mode toggle functions
- [ ] Mobile responsive design works
- [ ] Back to top button functions

### Performance Checks

- [ ] Page load time acceptable (< 3 seconds)
- [ ] Images optimized
- [ ] Minification working (check page source)
- [ ] No console errors in browser
- [ ] Search index loads quickly

### SEO Checks

- [ ] Page titles correct
- [ ] Meta descriptions present
- [ ] Favicon displays
- [ ] Social media cards configured
- [ ] Sitemap generated

## Rollback Procedure

If deployment issues occur:

### Quick Rollback

```bash
# 1. Identify last good commit
git log --oneline

# 2. Reset to that commit
git reset --hard <commit-hash>

# 3. Force push
git push -f origin main
```

### Emergency Rollback

```bash
# Restore gh-pages branch to previous state
git checkout gh-pages
git reset --hard HEAD~1
git push -f origin gh-pages
```

## Monitoring

### First 24 Hours

- [ ] Check site hourly for first 4 hours
- [ ] Monitor GitHub Actions for any issues
- [ ] Check error logs if available
- [ ] Verify custom domain continues to work
- [ ] Test from different devices/browsers

### First Week

- [ ] Daily site check
- [ ] Monitor any user feedback
- [ ] Check analytics (if configured)
- [ ] Verify search functionality
- [ ] Check for any broken links reported

## Common Issues and Solutions

### Issue: Site not updating

**Solution**:
1. Check GitHub Actions completed successfully
2. Verify gh-pages branch updated
3. Clear browser cache (Ctrl+Shift+R)
4. Wait 2-3 minutes for CDN propagation

### Issue: Custom domain not working

**Solution**:
1. Verify CNAME file exists in repository root
2. Check DNS settings point to GitHub Pages
3. Verify custom domain in repository settings
4. Check HTTPS certificate status

### Issue: Build fails

**Solution**:
1. Review GitHub Actions logs
2. Test build locally: `mkdocs build --strict --verbose`
3. Check for markdown linting errors
4. Verify all file references are correct

### Issue: Images not loading

**Solution**:
1. Verify images exist in docs/assets/images/
2. Check image paths in markdown files
3. Ensure proper capitalization (case-sensitive)
4. Check image file permissions

## Success Criteria

Deployment is successful when:

- ✅ GitHub Actions workflow completes without errors
- ✅ Site accessible at production URL
- ✅ All pages load correctly
- ✅ Search works
- ✅ Images display
- ✅ Navigation functions
- ✅ Mobile responsive
- ✅ No console errors

## Contact for Issues

If you encounter deployment issues:

1. Check GitHub Actions logs
2. Review this checklist
3. Consult README.md troubleshooting section
4. Open GitHub issue with details

---

**Last Updated**: September 29, 2025
**Deployment Method**: GitHub Actions (automatic)
**Target URL**: https://www.onyxultrasonics.co.uk