let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".camada-modal");

btnAjuda.addVentListenner("click", abreModal);
btnAjuda.addVentListenner("click", fechaModal);

function abreModal(){
    modal.styles.display = "block";
}

function fechaModal(){
    modal.style.display = "none";
}