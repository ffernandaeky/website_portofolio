import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';

(() => {
  const certificates = {
    'bmkg-internship.pdf': 'BMKG Internship Certificate',
    'dynamic-outbound.pdf': 'Dynamic Outbound HIMIT PENS 2024 Certificate',
    'google-data-studio.pdf': 'Google Data Studio Certificate',
    'himit-chairman.pdf': 'HIMIT PENS 2025 Chairman Certificate',
    'himit-junior-staff.pdf': 'HIMIT PENS 2024 Junior Staff Certificate',
    'javascript.pdf': 'JavaScript Certificate',
    'kpu-himit.pdf': 'KPU HIMIT PENS 2023 Certificate',
    'lkmm.pdf': 'LKMM Pra-TD PENS 2022 Certificate',
    'lkmm-pra-td.jpeg': 'LKMM Pra-TD PENS 2022 Certificate',
    'lkmm-pra-td.pdf': 'LKMM Pra-TD PENS 2022 Certificate',
    'microsoft-power-bi.pdf': 'Microsoft Power BI Certificate',
    'microsoft-power-bi.jpg': 'Microsoft Power BI Certificate',
    'microsoft-power-bi-certificate.pdf': 'Microsoft Power BI Certificate',
    'pt-pal-internship.pdf': 'PT PAL Indonesia Internship Certificate',
    'tableau.pdf': 'Tableau Certificate',
    'technogear.pdf': 'PKKMB × Technogear PENS 2024 Certificate',
  };

  const file = new URLSearchParams(location.search).get('file');
  const title = certificates[file];
  const titleElement = document.querySelector('#certificate-title');
  const viewer = document.querySelector('#certificate-viewer');
  document.querySelector('#year').textContent = new Date().getFullYear();

  if (!title) {
    document.title = 'Certificate not found: Eky Fernanda';
    titleElement.textContent = 'Certificate not found';
    viewer.innerHTML = '<p class="certificate-error">This certificate is unavailable. Please return to the Experience page and select a certificate again.</p>';
    return;
  }

  document.title = `${title}: Eky Fernanda`;
  titleElement.textContent = title;
  const replacementFiles = {
    'lkmm.pdf': 'lkmm-pra-td.pdf',
    'lkmm-pra-td.jpeg': 'lkmm-pra-td.pdf',
    'microsoft-power-bi.pdf': 'microsoft-power-bi-certificate.pdf',
    'microsoft-power-bi.jpg': 'microsoft-power-bi-certificate.pdf',
  };
  const sourceFile = replacementFiles[file] || file;
  const source = `assets/certificates/${sourceFile}`;
  if (!sourceFile.endsWith('.pdf')) {
    viewer.innerHTML = `<img class="certificate-image" src="${source}" alt="${title}">`;
    return;
  }

  async function renderPdf() {
    try {
      const pdf = await pdfjsLib.getDocument(source).promise;
      viewer.innerHTML = '';
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.75 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.className = 'certificate-canvas';
        canvas.setAttribute('aria-label', `${title}, page ${pageNumber}`);
        await page.render({ canvasContext: context, viewport }).promise;
        viewer.append(canvas);
      }
    } catch {
      viewer.innerHTML = '<p class="certificate-error">The certificate could not be displayed. Please try refreshing this page.</p>';
    }
  }

  renderPdf();
})();
