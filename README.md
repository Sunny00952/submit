# Submit Web - PDF Viewer Application

This project contains a modern web application for PDF document previewing and downloading, designed to be deployed on GitHub Pages.

## Quick Start

1. **Navigate to the web folder**:
   ```bash
   cd web
   ```

2. **Add your PDF files** to `web/pdfs/` directory

3. **Edit config.json** to list your PDFs:
   ```json
   {
     "documents": [
       {
         "name": "Your PDF Name",
         "path": "./pdfs/your-file.pdf",
         "size": "2.5 MB"
       }
     ]
   }
   ```

4. **Local testing** (choose one):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```

5. **Visit** http://localhost:8000/web/

## Deployment on GitHub Pages

### Option 1: Deploy from main branch
1. Push the entire repository to GitHub
2. Go to Settings → Pages
3. Select "main" branch as source
4. Access at: `https://yourusername.github.io/submit/web/`

### Option 2: Using GitHub Actions (Recommended)
The `.github/workflows/deploy.yml` file is included for automatic deployment.

Just push your changes, and GitHub Actions will automatically deploy to the `gh-pages` branch.

## Project Structure

```
submit/
├── web/                      # Main web application
│   ├── index.html           # Main entry point
│   ├── config.json          # PDF documents configuration
│   ├── css/
│   │   └── style.css        # Application styles
│   ├── js/
│   │   └── app.js           # Main JavaScript logic
│   ├── pdfs/                # Directory for PDF files
│   ├── README.md            # Web app documentation
│   └── PDFJS_SETUP.md       # PDF.js setup guide
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Features

✅ PDF Preview - Full-featured PDF viewer  
✅ Page Navigation - Browse through documents  
✅ Zoom Controls - Multiple zoom levels  
✅ Download Feature - Download PDFs directly  
✅ Fullscreen Mode - View in fullscreen  
✅ Responsive Design - Works on all devices  
✅ Keyboard Shortcuts - Arrow keys, +/-, etc.  
✅ Document Management - Easy PDF configuration  

## Key Technologies

- **PDF.js 3.11.174** - PDF rendering (from CDN)
- **Vanilla JavaScript** - No frameworks required
- **CSS3** - Modern, responsive styling
- **HTML5** - Semantic markup

## Files Overview

### index.html
Main HTML file with structure and controls:
- Toolbar with navigation and zoom
- Canvas for PDF rendering
- Sidebar with document list
- Responsive layout

### css/style.css
Comprehensive styling including:
- Design system with CSS variables
- Responsive breakpoints
- Dark/light mode support
- Custom scrollbars

### js/app.js
Core application logic:
- PDF document loading with pdf.js
- Page rendering and caching
- Zoom and pan controls
- Keyboard shortcuts
- Event handling

### config.json
Configuration file:
```json
{
  "title": "Your Title",
  "documents": [
    {
      "name": "Display Name",
      "path": "./pdfs/file.pdf",
      "size": "1.2 MB"
    }
  ]
}
```

## Browser Requirements

- Modern browsers with JavaScript enabled
- Minimum: Chrome 90+, Firefox 88+, Safari 14+
- Mobile: iOS Safari 14+, Chrome Android 90+

## Customization Guide

### Change Colors
Edit `:root` variables in `css/style.css`:
```css
:root {
    --color-primary: #your-color;
    --color-gray-bg: #your-color;
}
```

### Add More Features
Extend `PDFViewer` class in `js/app.js`:
- Add text search
- Add annotations
- Add signature support
- Integrate with databases

### Custom Domain
Use GitHub Pages custom domain settings and edit `.github/workflows/deploy.yml`:
```yaml
cname: yourdomain.com
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| PDFs won't load | Start a local server (not file://) |
| Blank pages | Check PDF file integrity |
| Styling broken | Clear browser cache |
| Documents not showing | Verify config.json syntax |

## Performance Optimization

1. **Optimize PDFs** - Use web-optimized PDF format
2. **Compress Images** - Reduce file sizes
3. **Enable Caching** - Browser caches resources
4. **Use CDN** - PDF.js loaded from CDN
5. **Lazy Load** - Pages render on demand

## Security Considerations

- ✅ Client-side rendering (no server needed)
- ✅ Works offline after loading
- ✅ No external dependencies beyond PDF.js
- ✅ CORS-compliant
- ⚠️  Ensure PDFs are public-safe documents

## Development Tips

### Testing Locally
```bash
cd web
python -m http.server 8000
# Visit http://localhost:8000
```

### Adding New PDFs
1. Place PDF in `web/pdfs/`
2. Update `web/config.json`
3. Reload browser

### Debugging
- Open DevTools (F12)
- Check Console for errors
- Use Network tab to monitor loading
- Test with different PDFs

## Advanced Usage

### Multiple Viewers on One Page
Create multiple instances:
```javascript
const viewer1 = new PDFViewer({ containerId: 'viewer1' });
const viewer2 = new PDFViewer({ containerId: 'viewer2' });
```

### Programmatic Control
```javascript
// Load specific PDF
window.pdfViewer.loadDocument('./pdfs/document.pdf');

// Navigate programmatically
window.pdfViewer.goToPage(5);

// Zoom to specific level
window.pdfViewer.setZoom(150);
```

## License

This project is licensed under the MIT License. PDF.js is licensed under Apache 2.0.

## Support

For issues with:
- **PDF.js**: See [mozilla/pdf.js](https://github.com/mozilla/pdf.js)
- **GitHub Pages**: See [GitHub Pages Docs](https://pages.github.com/)
- **This Project**: Check README.md in web/ folder

---

**Created**: March 17, 2026  
**Last Updated**: March 17, 2026