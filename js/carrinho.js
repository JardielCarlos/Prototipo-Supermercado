var finalizarPedido = document.getElementById("btnFinalizar")
var precos = document.querySelectorAll(".preco")
var subtotal = document.getElementById("spanSubtotal")
var finalizarPreco = document.getElementById("finalizarPreco")
var finalizarTotal = document.getElementById("finalizarTotal")
var dezporcentagem = document.getElementById("porcentagem")
var totItens = document.getElementById("totItens")
var totfinalizar = document.getElementById("totfinalizar")
var select = document.querySelectorAll(".selectSacola") 
var card = document.querySelectorAll(".sacolaCompra")


finalizarPedido.addEventListener("click", function(){
  finalizarPedido.textContent = 'Compra Realizada com Sucesso' 
  finalizarPedido.addEventListener("mouseout", function(){
    finalizarPedido.innerHTML = `Finalizar Compra <img src="img/shopping-bag2.svg" alt="Imagem de uma sacola de compras">`
  })
})

var total = 0
for(let i = 0; i < precos.length; i++){
  let preco = precos[i].textContent
  let valor = parseFloat(preco.replace("R$", ""))
  total += valor
  var arredondar = +(total.toFixed(2))

  subtotal.textContent = `R$ ${arredondar}`
  finalizarPreco.textContent = `R$ ${arredondar}`
  finalizarTotal.textContent = `R$ ${arredondar}`
  
  porcentagem = (10/100) * total
  porcentagemtotal = total + porcentagem
  let arredondado  = +(porcentagemtotal.toFixed(2))
  dezporcentagem.innerHTML = `ou R$ ${arredondado} em até 8x <img src="img/credit-card.svg" alt="Imagem de um cartão de credito">`
}  


totItens.textContent = `(${precos.length} itens)`
totfinalizar.textContent = `${precos.length} Produtos`


var precosFixo = []
var precosModificado = []
for(let a = 0; a< precos.length; a++){
  let preco = precos[a].textContent
  let valor = parseFloat(preco.replace("R$", ""))
  precosFixo.push(valor)
  precosModificado.push(valor)
}
for(let i = 0; i < select.length; i++){
  select[i].addEventListener("change", function(event){
    let quantidade = event.target.value
    let preco = precosFixo[i]
    let multiplicar = preco * quantidade
    let quantPreco = +(multiplicar.toFixed(2))
    precosModificado[i] = quantPreco
    
    total = 0
    for(let i = 0; i < precos.length; i++){
      let preco = precosModificado[i]
      total += preco
      var arredondar = +(total.toFixed(2))
      
      subtotal.textContent = `R$ ${arredondar}`
      finalizarPreco.textContent = `R$ ${arredondar}`
      finalizarTotal.textContent = `R$ ${arredondar}`
      
      porcentagem = (10/100) * total
      porcentagemtotal = total + porcentagem
      let arredondado  = +(porcentagemtotal.toFixed(2))
      dezporcentagem.innerHTML = `ou R$ ${arredondado} em até 8x <img src="img/credit-card.svg" alt="Imagem de um cartão de credito">`
    }
  })
}