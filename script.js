let primeirafileira;
let segundafileira;
let terceirafileira;

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
}



//const caixabotao = document.querySelector(".caixabotao");
//caixabotao.innerHTML = "Pedido fechado";