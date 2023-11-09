const botaoCopiar = document.getElementById("Copiar");

botaoCopiar.addEventListener("click", () => {
  const textoParaCopiar = botaoCopiar.innerText;
  const elementoTemporario = document.createElement("textarea");
  elementoTemporario.value = textoParaCopiar;
  document.body.appendChild(elementoTemporario);
  elementoTemporario.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporario);
  alert("E-mail copiado para a área de transferência!");
});