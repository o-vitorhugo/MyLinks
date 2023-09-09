function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

    // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver no light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se estiver sem light mode, manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
  }

  /* Código completo para fazer botão switch light/dark mode funcionar

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
}
