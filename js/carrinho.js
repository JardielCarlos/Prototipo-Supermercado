let finalizarPedido = document.getElementById("btnFinalizar")
let precos = document.querySelectorAll(".preco")
let subtotal = document.getElementById("spanSubtotal")
let finalizarPreco = document.getElementById("finalizarPreco")
let finalizarTotal = document.getElementById("finalizarTotal")
let dezporcentagem = document.getElementById("porcentagem")
let totItens = document.getElementById("totItens")
let totfinalizar = document.getElementById("totfinalizar")
let select = document.querySelectorAll(".selectSacola") 
let card = document.querySelectorAll(".sacolaCompra")
let link = document.querySelectorAll(".excluirNone")
let sacolaCompra = document.querySelectorAll(".sacolaCompra")


// Ação de Compra realizada com Sucesso
finalizarPedido.addEventListener("click", function(){
  finalizarPedido.textContent = 'Compra Realizada com Sucesso' 
  finalizarPedido.addEventListener("mouseout", function(){
    finalizarPedido.innerHTML = `Finalizar Compra <img src="img/shopping-bag2.svg" alt="Imagem de uma sacola de compras">`
  })
})

// Calcular os preços dinamicamente
let total = 0
for(let posicaoPreco = 0; posicaoPreco < precos.length; posicaoPreco++){
  let preco = precos[posicaoPreco].textContent
  let valor = parseFloat(preco.replace("R$", ""))
  total += valor
  let arredondar = +(total.toFixed(2))
  
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


// Tabelagem de preço
let precosFixo = []
let precosModificado = []
for(let valorPreco = 0; valorPreco< precos.length; valorPreco++){
  let preco = precos[valorPreco].textContent
  let valor = parseFloat(preco.replace("R$", ""))
  precosFixo.push(valor)
  precosModificado.push(valor)
}

// Tabelagem de quantidade
let quantModificado = []
for(let tamanhoSelect = 0; tamanhoSelect < select.length; tamanhoSelect++){
  quantModificado.push(1)
}

// Troca de quantidade pelo select de Qtd
for(let selectEspecifico = 0; selectEspecifico < select.length; selectEspecifico++){
  select[selectEspecifico].addEventListener("change", function(event){
    let quantidade = event.target.value
    let quantNum = parseInt(quantidade)
    quantModificado[selectEspecifico] = quantNum


    let somaQuant = 0
    for(let quant =0; quant < quantModificado.length; quant++){
      somaQuant += quantModificado[quant]
      // console.log(somaQuant);
    }

    let somaTamanho = 0
    for(let tam = 0; tam < quantModificado.length; tam++){
      somaTamanho += quantModificado[tam]
    }

    totfinalizar.textContent = `${somaTamanho} Produtos`
    totItens.textContent = `(${somaTamanho} itens)`
    
    // Calcular os preços dinamicamente
    let preco = precosFixo[selectEspecifico]
    let multiplicar = preco * quantidade
    let quantPreco = +(multiplicar.toFixed(2))
    precosModificado[selectEspecifico] = quantPreco
    
    total = 0
    for(let posicaoPreco = 0; posicaoPreco < precos.length; posicaoPreco++){
      let preco = precosModificado[posicaoPreco]
      total += preco
      let arredondar = +(total.toFixed(2))
      
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


// Excluir Produto do carrinho.
let tamanho = []
for(let posicaoDelete = 0; posicaoDelete < link.length; posicaoDelete++){
  link[posicaoDelete].addEventListener("click", function(){
    tamanho.push(posicaoDelete)
    tamanho[posicaoDelete] = posicaoDelete
    event.preventDefault()
    sacolaCompra[posicaoDelete].remove()
    
    
    let quantProdutos = []
  for(let posicaoPreco = 0; posicaoPreco< precos.length; posicaoPreco++){
    let preco = precos[posicaoPreco].textContent
    let valor = parseFloat(preco.replace("R$", ""))
    precosModificado.push(valor)
    quantProdutos.push(valor)
  }

  // console.log(quantModificado);
  precosModificado[posicaoDelete] = 0
  quantModificado[posicaoDelete] = 0
  let somaTamanho = 0
  for(let tam = 0; tam < quantModificado.length; tam++){
    somaTamanho += quantModificado[tam]
  }
  
  
  // Calcular os preços dinamicamente
  total = 0
  for(let posicaoPreco = 0; posicaoPreco < precos.length; posicaoPreco++){
    let preco = precosModificado[posicaoPreco]
    total += preco
    let arredondar = +(total.toFixed(2))
    
    subtotal.textContent = `R$ ${arredondar}`
    finalizarPreco.textContent = `R$ ${arredondar}`
    finalizarTotal.textContent = `R$ ${arredondar}`
    
    porcentagem = (10/100) * total
    porcentagemtotal = total + porcentagem
    let arredondado  = +(porcentagemtotal.toFixed(2))
    dezporcentagem.innerHTML = `ou R$ ${arredondado} em até 8x <img src="img/credit-card.svg" alt="Imagem de um cartão de credito">`
  }
  
  totItens.textContent = `(${somaTamanho} itens)`
  totfinalizar.textContent = `${somaTamanho} Produtos`
  })
}
