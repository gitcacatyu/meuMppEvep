const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const preview = document.getElementById('preview');

function updatePreview() {
  const combined = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <style>${cssCode.value}</style>
    </head>
    <body>
      ${htmlCode.value}
      <script>${jsCode.value}<\/script>
    </body>
    </html>
  `;
  preview.srcdoc = combined;
}

function saveToLocalStorage() {
  localStorage.setItem('htmlCode', htmlCode.value);
  localStorage.setItem('cssCode', cssCode.value);
  localStorage.setItem('jsCode', jsCode.value);
}

function loadFromLocalStorage() {
  if(localStorage.getItem('htmlCode')) {
    htmlCode.value = localStorage.getItem('htmlCode');
  }
  if(localStorage.getItem('cssCode')) {
    cssCode.value = localStorage.getItem('cssCode');
  }
  if(localStorage.getItem('jsCode')) {
    jsCode.value = localStorage.getItem('jsCode');
  }
}

htmlCode.addEventListener('input', () => {
  updatePreview();
  saveToLocalStorage();
});

cssCode.addEventListener('input', () => {
  updatePreview();
  saveToLocalStorage();
});

jsCode.addEventListener('input', () => {
  updatePreview();
  saveToLocalStorage();
});

// Carrega do LocalStorage assim que a página abrir
loadFromLocalStorage();
// Atualiza o preview na hora
updatePreview();
