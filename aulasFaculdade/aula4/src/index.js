// import FILMES from "./filmes.js"
import { drawFilmes, create, save, remove, alterar } from "./list-filmes.js"

console.log("Hello");

function start() {
    //? Reset filmes
    //  localStorage.setItem('filmes', JSON.stringify(FILMES))

    const filmes = JSON.parse(
        localStorage.getItem('filmes')
    )

    drawFilmes(filmes);

    document.getElementById('novo').addEventListener("click", create)
    document.getElementById('salvar').addEventListener("click", save)
    document.getElementById('remover').addEventListener("click", remove)
    document.getElementById('alterar').addEventListener("click", alterar)

}


start();