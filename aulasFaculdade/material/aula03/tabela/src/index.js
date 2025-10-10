import ANIMES from './animes.js';
import { preencherTabelaComAnimes, novo, salvar, remover, alterar, pesquisar } from './tela-animes.js';

// EXERCÍCIO 1
// Refatorar o arquivo index.js, movendo todas as funções,
// exceto iniciar(), para um arquivo "tela-animes.js"

window.onload = iniciar;

function iniciar() {
    preencherTabelaComAnimes( ANIMES );
    document.getElementById( 'novo' ).onclick = novo;
    document.getElementById( 'salvar' ).onclick = salvar;
    document.getElementById( 'remover' ).onclick = remover;
    document.getElementById( 'alterar' ).onclick = alterar;
    document.getElementById( 'pesquisar' ).onclick = pesquisar;
}
