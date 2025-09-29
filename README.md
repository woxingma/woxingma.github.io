# Onyx Ultrasonics Documentation Site

This repository contains the official documentation website for Onyx Ultrasonics Ltd, built with MKDocs and the Material theme. The site is automatically deployed to GitHub Pages at [www.onyxultrasonics.co.uk](https://www.onyxultrasonics.co.uk).

## Overview

This is a professional documentation site featuring:

- **Material for MKDocs** - Modern, responsive Material Design theme
- **Comprehensive Content** - Full documentation covering services, applications, and technical details
- **Automated CI/CD** - GitHub Actions workflow for testing, validation, and deployment
- **Quality Assurance** - Markdown linting, link checking, and build validation
- **Custom Styling** - Tailored CSS and JavaScript for enhanced user experience

## Site Structure

```text
woxingma.github.io/
├── docs/                           # Documentation content
│   ├── index.md                    # Homepage
│   ├── about.md                    # About Onyx Ultrasonics
│   ├── contact.md                  # Contact information
│   ├── services/                   # Services documentation
│   │   ├── index.md
│   │   ├── transducers.md
│   │   ├── sonar.md
│   │   └── ultrasonics.md
│   ├── applications/               # Application areas
│   │   ├── index.md
│   │   ├── maritime.md
│   │   ├── ndt.md
│   │   └── flow.md
│   └── assets/                     # Static assets
│       ├── images/                 # Images and logos
│       ├── stylesheets/            # Custom CSS
│       └── javascripts/            # Custom JavaScript
├── .github/
│   └── workflows/
│       └── deploy-docs.yml         # CI/CD pipeline
├── mkdocs.yml                      # MKDocs configuration
├── requirements.txt                # Python dependencies
├── .markdownlint.yml              # Markdown linting rules
├── .markdownlintignore            # Linting exclusions
├── .gitignore                     # Git ignore patterns
├── CNAME                          # Custom domain configuration
└── README.md                      # This file
```

## Quick Start

### Prerequisites

- Python 3.11 or higher
- pip (Python package manager)
- Git

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:woxingma/woxingma.github.io.git
   cd woxingma.github.io
   ```

2. **Create a virtual environment**

   ```bash
   # Create virtual environment
   python -m venv .venv

   # Activate on macOS/Linux
   source .venv/bin/activate

   # Activate on Windows
   .venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

4. **Verify installation**

   ```bash
   mkdocs --version
   ```

### Local Testing

#### Serve the site locally

```bash
# Start development server (with live reload)
mkdocs serve

# Open browser to http://127.0.0.1:8000
```

The site will automatically reload when you make changes to documentation files.

#### Build the site

```bash
# Build static site
mkdocs build --clean

# Build with strict mode (recommended before deployment)
mkdocs build --clean --strict

# View the built site
cd site && python -m http.server 8000
```

#### Validate before pushing

```bash
# 1. Lint markdown files
markdownlint-cli2 "docs/**/*.md"

# 2. Test build in strict mode
mkdocs build --clean --strict --verbose

# 3. Check for common issues
grep -r "TODO\|FIXME" docs/ --include="*.md"
```

## MKDocs Configuration

### Key Features Enabled

The `mkdocs.yml` configuration includes:

- **Navigation**
  - Instant loading
  - Navigation tabs
  - Section expansion
  - Back to top button
  - Footer navigation

- **Search**
  - Highlighting
  - Suggestions
  - Share capability

- **Content**
  - Code copy buttons
  - Code annotations
  - Tabbed content
  - Tooltips

- **Extensions**
  - Admonitions (notes, warnings, tips)
  - Definition lists
  - Footnotes
  - Tables
  - Mermaid diagrams
  - Emoji support
  - Task lists

### Plugins Configured

1. **search** - Full-text search with highlighting
2. **minify** - HTML/CSS/JS minification for performance
3. **glightbox** - Image lightbox gallery

## GitHub Actions CI/CD Pipeline

The repository uses a comprehensive 4-job workflow:

### Job 1: Lint and Test

Comprehensive validation including:

- ✅ YAML linting (mkdocs.yml validation)
- ✅ Markdown linting with markdownlint-cli2
- ✅ CSS syntax validation
- ✅ JavaScript validation
- ✅ MKDocs configuration validation
- ✅ Internal link checking
- ✅ Image reference validation
- ✅ Strict mode test build
- ✅ TODO/FIXME detection
- ✅ Build report generation

### Job 2: Build

- Builds the MKDocs site
- Uploads artifact for deployment

### Job 3: Deploy

- Deploys to GitHub Pages using `mkdocs gh-deploy`
- Only runs on main/master branch
- Creates/updates gh-pages branch

### Job 4: Notify

- Provides deployment status summary
- Reports success/failure with details
- Shows deployment URLs

## Workflow Triggers

The CI/CD pipeline runs on:

- **Push to main/master** - Full build and deployment
- **Pull requests** - Validation only (no deployment)
- **Manual trigger** - Via GitHub Actions UI
- **Path filters** - Only when docs, config, or workflow files change

## Deployment Process

### Automatic Deployment

When you push to the main branch:

1. GitHub Actions automatically triggers
2. All validation tests run
3. Site is built
4. Deployment to GitHub Pages occurs
5. Site is live at www.onyxultrasonics.co.uk

### Manual Deployment

If you need to deploy manually:

```bash
# Make sure you're on main branch
git checkout main

# Deploy to GitHub Pages
mkdocs gh-deploy --force --clean --verbose

# View deployment
open https://www.onyxultrasonics.co.uk
```

## Writing Documentation

### Creating New Pages

1. Create a new markdown file in the appropriate directory:

   ```bash
   # Example: Add a new service page
   touch docs/services/new-service.md
   ```

2. Add the page to `mkdocs.yml` navigation:

   ```yaml
   nav:
     - Services:
       - services/index.md
       - New Service: services/new-service.md
   ```

3. Write your content following the markdown standards

### Markdown Standards

All documentation must follow these standards:

- Use ATX-style headers (`#` not underlines)
- Headers follow hierarchy (H1 → H2 → H3)
- Code blocks specify language for syntax highlighting
- Images include descriptive alt text
- Links are functional and properly formatted
- Lines should not exceed 120 characters (where practical)
- Files end with single newline

### Using Admonitions

```markdown
!!! note "Information"
    This is a note with additional context.

!!! tip "Pro Tip"
    Helpful advice for users.

!!! warning "Important"
    Critical information users must know.

!!! danger "Caution"
    Potential pitfalls or breaking changes.

!!! success "Achievement"
    Positive confirmation or success message.

!!! info "Details"
    Additional information and context.
```

### Code Blocks

Always specify the language:

````markdown
```python
def hello_world():
    print("Hello, World!")
```

```bash
mkdocs serve
```

```yaml
site_name: "My Site"
```
````

### Images

```markdown
![Descriptive alt text](assets/images/filename.png)
```

### Links

```markdown
[Link text](page.md)  # Internal link
[External link](https://example.com)
```

## Customization

### Custom CSS

Edit `docs/assets/stylesheets/extra.css` to customize styling:

```css
/* Example: Change primary color */
:root {
  --md-primary-fg-color: #546e7a;
}
```

### Custom JavaScript

Edit `docs/assets/javascripts/extra.js` for custom behavior:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Your custom code here
});
```

## Troubleshooting

### Build Errors

**Problem**: `mkdocs build` fails with errors

**Solution**:

```bash
# Run in strict mode for detailed errors
mkdocs build --clean --strict --verbose

# Check for specific issues
mkdocs build --clean --strict 2>&1 | grep ERROR
```

### Linting Errors

**Problem**: Markdown linting fails

**Solution**:

```bash
# Run linting locally
markdownlint-cli2 "docs/**/*.md"

# Auto-fix issues where possible
markdownlint-cli2 "docs/**/*.md" --fix
```

### Broken Links

**Problem**: Internal links not working

**Solution**:

- Verify file paths are correct
- Use relative paths from the current file
- Check navigation in mkdocs.yml matches file structure

### GitHub Pages Not Updating

**Problem**: Changes not visible on live site

**Solution**:

1. Check GitHub Actions workflow completed successfully
2. Verify gh-pages branch was updated
3. Check CNAME file is present
4. Wait 1-2 minutes for CDN cache to clear
5. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Virtual Environment Issues

**Problem**: Commands not found after activation

**Solution**:

```bash
# Deactivate and recreate virtual environment
deactivate
rm -rf .venv
python -m venv .venv
source .venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
```

## Maintenance

### Updating Dependencies

```bash
# Activate virtual environment
source .venv/bin/activate

# Update pip
pip install --upgrade pip

# Update MKDocs and plugins
pip install --upgrade mkdocs mkdocs-material mkdocs-minify-plugin mkdocs-glightbox

# Update requirements.txt
pip freeze | grep -E "mkdocs|pymdown" > requirements.txt
```

### Content Review Checklist

- [ ] All pages have proper titles and descriptions
- [ ] Navigation structure is logical
- [ ] All links are functional
- [ ] Images are optimized and load quickly
- [ ] Code examples are tested and accurate
- [ ] Contact information is current
- [ ] No TODO/FIXME items remain
- [ ] Content is technically accurate

## Site URLs

- **Production**: https://www.onyxultrasonics.co.uk
- **GitHub Pages**: https://woxingma.github.io/woxingma.github.io
- **Repository**: https://github.com/woxingma/woxingma.github.io

## Support

For questions or issues with the documentation site:

- Open an issue on GitHub
- Contact the development team
- Review MKDocs documentation: https://www.mkdocs.org
- Review Material theme docs: https://squidfunk.github.io/mkdocs-material

## Technology Stack

- **Static Site Generator**: MKDocs 1.5+
- **Theme**: Material for MKDocs 9.5+
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Domain**: Cloudflare DNS / Custom domain
- **Markdown Extensions**: PyMdown Extensions
- **Linting**: markdownlint-cli2, yamllint

## License

Copyright © 2025 Onyx Ultrasonics Ltd. All rights reserved.

---

**✨ Built by [Fetch Labs](https://github.com/FetchLabsLtd) with 🤖 and 🍵**