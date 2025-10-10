// import FILMES from './filmes.js';
import { novo, remover, salvar, pesquisar, irParaAnterior, irParaProxima } from './listagem-filmes.js';

document.addEventListener( 'DOMContentLoaded', iniciar );

function iniciar() {
    // localStorage.setItem( 'filmes', JSON.stringify( FILMES ) );

    // const filmes = JSON.parse(
    //     localStorage.getItem( 'filmes' ) || '[]'
    // );
    // desenharFilmes( filmes );
    irParaAnterior();

    document.getElementById( 'novo' ).addEventListener( 'click', novo );
    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );

    document.getElementById( 'remover' ).addEventListener( 'click', remover );

    document.getElementById( 'pesquisar' ).addEventListener( 'click', pesquisar );

    document.getElementById( 'anterior' ).addEventListener( 'click', irParaAnterior );
    document.getElementById( 'proxima' ).addEventListener( 'click', irParaProxima );
}
