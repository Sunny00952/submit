# PDF Viewer Web Application

A comprehensive PDF viewer web application inspired by PDF.js, featuring a complete toolbar, sidebar navigation, find functionality, and editor tools. Deployable on GitHub Pages.

## Features

### Core PDF Viewing
- **PDF Rendering**: High-quality PDF rendering using PDF.js
- **Page Navigation**: Navigate between pages with buttons, input field, or keyboard shortcuts
- **Zoom Controls**: Multiple zoom levels including auto-fit, page width, and custom scaling
- **Download & Print**: Download PDFs or print directly from the browser

### Advanced Features
- **Sidebar Navigation**: Toggle sidebar with thumbnails, outlines, attachments, and layers
- **Find in Document**: Search text within PDFs with highlighting and navigation
- **Thumbnails View**: Visual page navigation with thumbnail previews
- **Secondary Toolbar**: Additional tools including first/last page, rotation, and cursor modes

### User Interface
- **Complete Toolbar**: Full-featured toolbar matching PDF.js viewer design
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Shortcuts**:
  - `Arrow Left/Right`: Navigate pages
  - `+/-`: Zoom in/out
  - `Ctrl+F`: Open find bar
  - `Escape`: Close dropdowns
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### Editor Tools (UI Ready)
- **Highlight Tool**: Text highlighting interface
- **Free Text Tool**: Add text annotations
- **Ink Tool**: Draw freehand annotations
- **Signature Tool**: Add signatures (UI framework ready)

## Project Structure

```
submit/
├── index.html           # Main HTML page with complete viewer UI
├── css/
│   └── style.css       # PDF.js-inspired styling
├── js/
│   └── app.js          # Enhanced application logic
├── config.json         # Configuration file
├── pdfs/               # Directory for PDF files
│   └── submit.pdf      # Main PDF document
└── README.md           # This documentation
```

## Getting Started

### Local Development

1. **Serve the application**:
   ```bash
   cd submit
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

2. **Add your PDF**: Place your PDF file in the `pdfs/` directory and update the path in `js/app.js`

3. **Customize**: Modify `config.json` for additional configuration options

### GitHub Pages Deployment

1. **Upload to GitHub**: Push the `submit/` folder contents to a GitHub repository
2. **Enable Pages**: Go to repository Settings → Pages → Select main branch
3. **Access**: Your viewer will be available at `https://username.github.io/repository/`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Dependencies

- **PDF.js**: For PDF rendering (loaded from CDN)
- **No build process required**: Pure HTML/CSS/JavaScript

## Customization

### Adding New PDFs
Update the PDF path in `js/app.js`:
```javascript
const pdfPath = './pdfs/your-document.pdf';
```

### Styling
Modify `css/style.css` to customize the appearance while maintaining the PDF.js look and feel.

### Features
The application includes UI for advanced features like annotations and form filling. Implement the backend functionality as needed for your use case.

## License

This project is designed to work with PDF.js and follows similar licensing terms.
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
