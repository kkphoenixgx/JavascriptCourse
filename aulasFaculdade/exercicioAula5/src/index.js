//* *DATABASE:  import FILMES from "./filmes.js"
import * as ListFilmes from "./list-filmes.js"

const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
const tbody = document.querySelector('tbody');

function start() {

    const filmes = JSON.parse( localStorage.getItem('filmes'))

    initEvents();
    ListFilmes.paginate(filmes);
    ListFilmes.drawFilmes();
}

//? ----------- Handlers -----------

const handleBuscar = ()=>{
    const nomeBuscado = document.getElementById('search').value;
    ListFilmes.buscar(nomeBuscado);
}


const handleAnterior = ()=>{
    
    if (ListFilmes.currentPage == 0) {
        anteriorBtn.disabled = true;
    }
    else anteriorBtn.disabled = false;

}
const handleProximo = ()=>{

    if (ListFilmes.currentPage >= ListFilmes.maxPages - 1){
        proximoBtn.disabled = true;
    }
    else proximoBtn.disabled = false;
    
}


function initEvents(){
    document.getElementById('novo').addEventListener("click", ListFilmes.create)
    document.getElementById('salvar').addEventListener("click", ListFilmes.save)
    document.getElementById('remover').addEventListener("click", ListFilmes.remove)
    document.getElementById('alterar').addEventListener("click", ListFilmes.alterar)
    
    document.getElementById('buscar').addEventListener("click", handleBuscar)
    
    anteriorBtn.addEventListener("click", ListFilmes.anterior)
    proximoBtn.addEventListener("click", ListFilmes.proximo)

    handleAnterior();
    handleProximo();

    //? Update dos botões
    tbody.addEventListener("pageChange", ()=>{
        handleAnterior();
        handleProximo();
    })
}

start();