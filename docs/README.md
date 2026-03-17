# PDF Viewer & Download Web Application

A modern, responsive web application for previewing and downloading PDF documents, deployable on GitHub Pages.

## Features

- **PDF Preview**: View PDF documents page by page
- **Page Navigation**: Navigate between pages using buttons or direct input
- **Zoom Controls**: Zoom in/out with preset levels or custom zoom
- **Download**: Download PDF files directly
- **Fullscreen Mode**: View PDFs in fullscreen
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Keyboard Shortcuts**: 
  - `Arrow Left/Right`: Navigate pages
  - `+/-`: Zoom in/out
  - `Ctrl/Cmd + Scroll`: Zoom with mouse wheel
- **Document Management**: Manage multiple PDFs through config.json

## Project Structure

```
web/
├── index.html           # Main HTML page
├── css/
│   └── style.css       # Styling with responsive design
├── js/
│   └── app.js          # Main application logic
├── config.json         # PDF documents configuration
├── pdfs/               # Directory for PDF files
│   ├── sample1.pdf
│   └── sample2.pdf
└── README.md           # This file
```

## Getting Started

### Local Development

1. **Clone or copy the web folder** to your local machine
2. **Add PDF files** to the `pdfs/` directory
3. **Update config.json** with your PDF information:
   ```json
   {
     "title": "My PDF Collection",
     "documents": [
       {
         "name": "Document Title",
         "path": "./pdfs/document.pdf",
         "size": "1.5 MB"
       }
     ]
   }
   ```
4. **Start a local server** (required for PDF.js to work):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if http-server is installed)
   http-server
   
   # Using PHP
   php -S localhost:8000
   ```
5. **Open** http://localhost:8000 in your browser

### GitHub Pages Deployment

1. **Copy the web folder** to your GitHub repository
2. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Select the branch (main or master) and folder (root or /docs)
   - Save
3. **Access** your PDF viewer at: `https://yourusername.github.io/your-repo/web/`

## Configuration

Edit `config.json` to manage your PDF documents:

```json
{
  "title": "Custom Title",
  "description": "Optional description",
  "documents": [
    {
      "name": "Display Name",
      "path": "./pdfs/filename.pdf",
      "size": "File size info"
    }
  ]
}
```

## Dependencies

- **PDF.js** (v3.11.174): Loaded from CDN
  - Main library: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js`
  - Worker: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Customization

### Styling

Edit `css/style.css` to customize colors, fonts, and layout. Key CSS variables:

```css
:root {
    --color-primary: #0066cc;
    --color-primary-dark: #0052a3;
    --color-gray-bg: #f5f5f5;
    /* ... more variables ... */
}
```

### JavaScript

Modify `js/app.js` to extends functionality:
- Add custom PDF handling
- Integrate annotation tools
- Add search functionality
- Implement custom themes

## Performance Tips

1. **PDF Optimization**: Use optimized PDFs for web
2. **Caching**: Browser caches the PDF.js library
3. **Large Files**: Consider splitting very large PDFs
4. **CDN**: Leave PDF.js on CDN for faster loading

## Troubleshooting

### PDFs not loading
- Ensure CORS is enabled (local server required)
- Check browser console for errors (F12)
- Verify PDF paths in `config.json`

### Rendering issues
- Clear browser cache
- Try a different browser
- Check PDF validity with PDF readers

### GitHub Pages issues
- Ensure repository is public or pages is enabled
- Check that files are in the correct directory
- Wait a few minutes after pushing changes

## Usage Examples

### Adding a new PDF

1. Place PDF in `pdfs/` directory
2. Update `config.json`:
   ```json
   {
     "name": "My Document",
     "path": "./pdfs/mydocument.pdf",
     "size": "2.1 MB"
   }
   ```

### Custom domain
GitHub Pages supports custom domains. See [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## License

This PDF viewer is provided as-is. PDF.js is licensed under Apache 2.0.

## References

- [PDF.js Documentation](https://mozilla.github.io/pdf.js/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Web Accessibility Standards](https://www.w3.org/WAI/)

## Version

- Version: 1.0.0
- Last Updated: 2026-03-17
