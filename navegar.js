function pesquisarGoogle() {
  // Pega o valor da pesquisa
  const query = document.getElementById("searchInput").value;

  // Verifica se há algum texto na pesquisa
  if (query) {
    // Redireciona para o Google com a pesquisa
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
  } else {
    alert("Por favor, insira um termo de pesquisa!");
  }
}
