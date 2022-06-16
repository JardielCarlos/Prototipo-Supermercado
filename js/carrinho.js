var finalizarPedido = document.getElementById("btnFinalizar")

finalizarPedido.addEventListener("click", function(){
  finalizarPedido.textContent = 'Compra Realizada com Sucesso' 
  finalizarPedido.addEventListener("mouseout", function(){
    finalizarPedido.innerHTML = `Finalizar Compra <img src="img/shopping-bag2.svg" alt="Imagem de uma sacola de compras">`
  })
})




