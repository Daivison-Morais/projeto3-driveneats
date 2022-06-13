let primeirafileira;
let segundafileira;
let terceirafileira;

let precoprato;
let precobebida;
let precosobremesa;
let totalapagar = precoprato + precobebida + precosobremesa;

function bordaverde1(elemento){
    primeirafileira = elemento.innerHTML
    const escolhaselecionada = document.querySelector(".fileira1 .bordaverde")
    if(escolhaselecionada !== null){
        escolhaselecionada.classList.remove("bordaverde")
    }
    elemento.classList.add("bordaverde")
    if (primeirafileira && segundafileira && terceirafileira){
        let greenpedidofechado = document.querySelector(".caixabotao");
         greenpedidofechado.classList.add("pedidofechado");
         greenpedidofechado.innerHTML = "Pedido Fechado";
     }
     preco = document.querySelector(".preco")
     precoprato = Number(preco.innerHTML).toFixed(4);
     return precoprato
}
function bordaverde2(elemento){
    segundafileira = elemento.innerHTML;
    const escolhaselecionada = document.querySelector(".fileira2 .bordaverde")
    if(escolhaselecionada !== null){
        escolhaselecionada.classList.remove("bordaverde")
    }
    elemento.classList.add("bordaverde")
    if (primeirafileira && segundafileira && terceirafileira){
        let greenpedidofechado = document.querySelector(".caixabotao");
         greenpedidofechado.classList.add("pedidofechado");
         greenpedidofechado.innerHTML = "Pedido Fechado";
     }
     preco = document.querySelector(".preco")
     precobebida = Number(preco.innerHTML).toFixed(4);
     return precobebida
}
function bordaverde3(elemento){
    terceirafileira= elemento.innerHTML
    const escolhaselecionada = document.querySelector(".fileira3 .bordaverde")
    if(escolhaselecionada !== null){
        escolhaselecionada.classList.remove("bordaverde")
    }
    elemento.classList.add("bordaverde")
    if (primeirafileira && segundafileira && terceirafileira){
        let greenpedidofechado = document.querySelector(".caixabotao");
         greenpedidofechado.classList.add("pedidofechado");
         greenpedidofechado.innerHTML = "Pedido Fechado";
     }
     preco = document.querySelector(".preco")
     precosobremesa = Number(preco.innerHTML).toFixed(4);
     return precosobremesa
     
}

function clickbotao(){
    if (primeirafileira && segundafileira && terceirafileira){
    let mensagem =
"Olá, gostaria de fazer o pedido:\n\
- Prato: Frango Yin Yangn\n\
- Bebida: Coquinha Geladan\n\
- Sobremesa: Pudim\n\
Total: R$ " + 
27.70; 
link ="https://wa.me/5591989391048?text=" + encodeURIComponent(mensagem);
window.open(link);
    }
}

//const caixabotao = document.querySelector(".caixabotao");
//caixabotao.innerHTML = "Pedido fechado";