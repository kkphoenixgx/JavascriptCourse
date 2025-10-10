// import FILMES from './filmes.js';
import { desenharFilmes, novo, remover, salvar } from './listagem-filmes.js';

document.addEventListener( 'DOMContentLoaded', iniciar );

function iniciar() {
    // localStorage.setItem( 'filmes', JSON.stringify( FILMES ) );
    const filmes = JSON.parse(
        localStorage.getItem( 'filmes' )
    );
    desenharFilmes( filmes );

    document.getElementById( 'novo' ).addEventListener( 'click', novo );
    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );

    document.getElementById( 'remover' ).addEventListener( 'click', remover );
}
