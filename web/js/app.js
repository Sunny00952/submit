/**
 * PDF Viewer Application
 * Provides PDF preview and download functionality
 */

// PDF.js worker setup
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

class PDFViewer {
    constructor() {
        this.currentDocument = null;
        this.currentPage = 1;
        this.totalPages = 0;
        this.zoom = 100;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.pageInput = document.getElementById('pageInput');
        this.totalPagesSpan = document.getElementById('totalPages');
        this.viewerStatus = document.getElementById('viewerStatus');
        
        this.initEventListeners();
        this.loadDocumentList();
    }

    initEventListeners() {
        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.prevPage());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextPage());
        
        // Page input
        this.pageInput.addEventListener('change', () => this.goToPage(parseInt(this.pageInput.value)));
        this.pageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.goToPage(parseInt(this.pageInput.value));
            }
        });
        
        // Zoom controls
        document.getElementById('zoomOutBtn').addEventListener('click', () => this.zoomOut());
        document.getElementById('zoomInBtn').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoomLevel').addEventListener('change', (e) => this.setZoom(e.target.value));
        
        // Download button
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadPDF());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.prevPage();
                    break;
                case 'ArrowRight':
                    this.nextPage();
                    break;
                case '+':
                case '=':
                    this.zoomIn();
                    break;
                case '-':
                    this.zoomOut();
                    break;
            }
        });
        
        // Canvas drag pan
        this.canvas.addEventListener('mousedown', (e) => this.startPan(e));
        this.canvas.addEventListener('mousemove', (e) => this.pan(e));
        this.canvas.addEventListener('mouseup', () => this.endPan());
        this.canvas.addEventListener('mouseleave', () => this.endPan());
        
        // Wheel zoom
        document.addEventListener('wheel', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.zoomIn();
                } else {
                    this.zoomOut();
                }
            }
        });
    }

    async loadDocumentList() {
        try {
            this.showStatus('Loading PDF...');
            
            // Direct PDF path for GitHub Pages
            const pdfPath = './pdfs/submit.pdf';
            
            try {
                // Try to load from config.json
                const response = await fetch('./config.json');
                const config = await response.json();
                if (config.documents && config.documents.length > 0) {
                    await this.loadDocument(config.documents[0].path);
                    return;
                }
            } catch (e) {
                // Fallback to direct path
                console.log('Config.json not found, using default path');
            }
            
            // Fallback to direct PDF path
            await this.loadDocument(pdfPath);
        } catch (error) {
            console.error('Error loading PDF:', error);
            this.showStatus('Error loading PDF');
        }
    }

    async loadDocument(path, element) {
        try {
            if (!path) {
                throw new Error('PDF path not provided');
            }
            
            this.showStatus(`Loading PDF from ${path}...`);
            
            // Load PDF with proper error handling
            const pdf = await pdfjsLib.getDocument({
                url: path,
                disableAutoFetch: false,
                disableStream: false
            }).promise;
            
            this.currentDocument = pdf;
            this.totalPages = pdf.numPages;
            this.totalPagesSpan.textContent = this.totalPages;
            this.currentPage = 1;
            this.zoom = 100;
            document.getElementById('zoomLevel').value = '100';
            this.pageInput.max = this.totalPages;
            
            await this.renderPage(1);
            this.showStatus('PDF loaded successfully');
            
            // Clear status after 2 seconds
            setTimeout(() => {
                this.showStatus('');
            }, 2000);
        } catch (error) {
            console.error('Error loading PDF:', error);
            this.showStatus('Error: ' + error.message);
        }
    }

    async renderPage(pageNumber) {
        if (!this.currentDocument || pageNumber < 1 || pageNumber > this.totalPages) {
            return;
        }

        try {
            this.showStatus(`Rendering page ${pageNumber}...`);
            this.currentPage = pageNumber;
            this.pageInput.value = pageNumber;
            
            // Disable navigation buttons
            document.getElementById('prevBtn').disabled = pageNumber === 1;
            document.getElementById('nextBtn').disabled = pageNumber === this.totalPages;
            
            const page = await this.currentDocument.getPage(pageNumber);
            const baseScale = this.zoom / 100;
            const viewport = page.getViewport({ scale: baseScale });
            
            this.canvas.width = viewport.width;
            this.canvas.height = viewport.height;
            
            const renderContext = {
                canvasContext: this.ctx,
                viewport: viewport,
                background: 'rgba(255,255,255,1)'
            };
            
            await page.render(renderContext).promise;
            this.showStatus('');
        } catch (error) {
            console.error('Error rendering page:', error);
            this.showStatus('Error rendering page');
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.renderPage(this.currentPage - 1);
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.renderPage(this.currentPage + 1);
        }
    }

    goToPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.totalPages) {
            this.renderPage(pageNumber);
        }
    }

    zoomIn() {
        const levels = [50, 75, 100, 125, 150, 200];
        let currentIndex = levels.indexOf(this.zoom);
        if (currentIndex < levels.length - 1) {
            this.setZoom(levels[currentIndex + 1]);
        }
    }

    zoomOut() {
        const levels = [50, 75, 100, 125, 150, 200];
        let currentIndex = levels.indexOf(this.zoom);
        if (currentIndex > 0) {
            this.setZoom(levels[currentIndex - 1]);
        }
    }

    setZoom(level) {
        let newZoom;
        switch(level) {
            case 'page-fit':
                newZoom = 'page-fit';
                break;
            case 'page-width':
                newZoom = 'page-width';
                break;
            default:
                newZoom = parseInt(level);
        }
        
        if (newZoom !== 'page-fit' && newZoom !== 'page-width') {
            this.zoom = newZoom;
        } else {
            // Implement page-fit and page-width logic
            this.zoom = 100;
        }
        
        if (this.currentDocument) {
            this.renderPage(this.currentPage);
        }
    }

    downloadPDF() {
        if (!this.currentDocument) {
            alert('No PDF loaded');
            return;
        }
        
        // Get the current document URL or create a download
        const links = document.querySelectorAll('a[href$=".pdf"]');
        if (links.length > 0) {
            const link = document.createElement('a');
            link.href = links[0].href;
            link.download = '';
            link.click();
        }
    }Create download link from config
        const link = document.createElement('a');
        link.href = './pdfs/submit.pdf';
        link.download = 'document.pdf';
        link.click();
    }

    toggleFullscreen() {
        // Fullscreen functionality removed for single document view   this.canvas.style.cursor = 'grabbing';
        }
    }

    pan(e) {
        if (!this.isDragging) return;
        
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        
        const viewer = document.querySelector('.viewer-container');
        viewer.scrollLeft -= dx;
        viewer.scrollTop -= dy;
    }

    endPan() {
        this.isDragging = false;
        this.canvas.style.cursor = 'default';
    }

    showStatus(message) {
        if (message) {
            this.viewerStatus.textContent = message;
            this.viewerStatus.classList.add('show');
        } else {
            this.viewerStatus.classList.remove('show');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.pdfViewer = new PDFViewer();
});
