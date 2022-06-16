var links = document.getElementsByClassName("textcarrinho")
for(let i = 0; i< links.length; i++){
  links[i].addEventListener("click", function(){
    links[i].textContent = "Adicionado"
    links[i].addEventListener("mouseout", function(){
      links[i].innerHTML = `Adicionar na sacola      <img src="img/shopping-bag.svg" alt="Imagem de uma sacola de compras">`
    })
  })
}
