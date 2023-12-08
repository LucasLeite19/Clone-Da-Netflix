// Função para traduzir o conteúdo para português usando a API do Google Translate
function traduzirParaPortugues() {
  const content = document.getElementById('content');
  const textos = content.querySelectorAll('h1, p'); // Seleciona títulos e parágrafos para tradução

  textos.forEach((texto) => {
    const textoOriginal = texto.innerText;
    const idiomaOriginal = 'en'; // Defina o idioma original do conteúdo (neste caso, inglês)

    // Chame a API do Google Translate para traduzir para o português
    // Substitua 'YOUR_API_KEY' pela sua chave da API do Google Translate (se necessário)
    const url = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(textoOriginal)}&source=${idiomaOriginal}&target=pt`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const traducao = data.data.translations[0].translatedText;
        texto.innerText = traducao; // Atualiza o texto com a tradução
      })
      .catch(error => console.error('Erro ao traduzir:', error));
  });
}

// Event listener para acionar a tradução quando o botão for clicado
const translateButton = document.getElementById('translateButton');
translateButton.addEventListener('click', traduzirParaPortugues);