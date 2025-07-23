function entrar() {
  const nome = document.getElementById("username").value;
  if (nome.trim() === "") {
    alert("Por favor, digite seu nome!");
    return;
  }

  localStorage.setItem("nomeUsuario", nome);
  window.location.href = "home2.html";
}
