let tituloprato, titulobebida, titulosobremesa;
let precoprato, precobebida, precosobremesa;
function converterNumero(stringnumber){
    preco = stringnumber.replace(",",".")
    preco = Number(preco) * 100
    return preco
}
function bordaverde1(elemento){
    
    const escolhaselecionada = document.querySelector(".fileira1 .bordaverde")
    if(escolhaselecionada !== null){
        escolhaselecionada.classList.remove("bordaverde")
    }
    elemento.classList.add("bordaverde")
    tituloprato = elemento.querySelector(".texto1").innerHTML
    precoprato = elemento.querySelector(".preco").innerHTML
    precoprato = converterNumero(precoprato)
    console.log(precoprato, typeof(precoprato)) 
    fazerPedido() 
     
}
function bordaverde2(elemento){
    let escolhaselecionada = document.querySelector(".fileira2 .bordaverde")
    if(escolhaselecionada !== null){
        escolhaselecionada.classList.remove("bordaverde")
    }
    elemento.classList.add("bordaverde")
    titulobebida = elemento.querySelector(".texto1").innerHTML
    precobebida = elemento.querySelector(".preco").innerHTML
    precobebida = converterNumero(precobebida)
    console.log(precobebida, typeof(precobebida))
    fazerPedido()

}
function bordaverde3(elemento){
    let escolhaselecionada = document.querySelector(".fileira3 .bordaverde")
    if(escolhaselecionada !== null){
        escolhaselecionada.classList.remove("bordaverde")
    }
    elemento.classList.add("bordaverde")
    titulosobremesa = elemento.querySelector(".texto1").innerHTML
    precosobremesa = elemento.querySelector(".preco").innerHTML
    precosobremesa = converterNumero(precosobremesa)
    console.log(precosobremesa, typeof(precosobremesa))
    fazerPedido()
}

function fazerPedido(){
    if (tituloprato && titulobebida && titulosobremesa){
        let greenpedidofechado = document.querySelector(".caixabotao");
         greenpedidofechado.classList.add("pedidofechado");
         greenpedidofechado.innerHTML = "PedidoFechado";
    }
}
function clickbotao(){
    if (tituloprato && titulobebida && titulosobremesa){
    let precototal = precoprato + precobebida + precosobremesa;
    let mensagem = `
Olá, gostaria de fazer o pedido:
- Prato: ${tituloprato}
- Bebida: ${titulobebida}\n\
- Sobremesa: ${titulosobremesa}\n\
Total: R$ ${(precototal/100).toFixed(2)} `
link ="https://wa.me/5591989391048?text=" + encodeURIComponent(mensagem)
window.open(link);
    }
}
