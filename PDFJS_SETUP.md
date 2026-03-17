<!-- PDF.js Snippet for HTML Integration -->
<!-- Include this in your HTML header for PDF support -->

<!-- PDF.js Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
  // Set up PDF.js worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = 
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
</script>

<!-- Example: Simple PDF Viewer -->
<div id="pdfContainer">
  <canvas id="pdfCanvas"></canvas>
</div>

<script>
  // Load and render a PDF
  async function loadPDF(url) {
    const pdf = await pdfjsLib.getDocument(url).promise;
    const page = await pdf.getPage(1);
    const canvas = document.getElementById('pdfCanvas');
    const context = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 1.5 });
    
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    
    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;
  }
  
  // Load a PDF file
  loadPDF('document.pdf');
</script>
