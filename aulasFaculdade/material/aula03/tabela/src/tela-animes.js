import ANIMES from './animes.js';

let indiceAnime = -1; // -1 = Novo, outro = Alterar

/**
 * @param {Array<{nome:string, ano: number}>} animes
 */
export function preencherTabelaComAnimes( animes, limpar = false ) {
    if ( limpar ) {
        document.querySelector( 'tbody' ).innerHTML = '';
    }
    for ( const anime of animes ) {
        adicionarAnime( anime );
    }
    configurarCliqueNasLinhas();
}

function configurarCliqueNasLinhas() {
    const linhas = document.querySelectorAll( 'tbody tr' );
    for ( const linha of linhas ) {
        /** @param {Event} event */
        linha.onclick = function( event ) {
            /** @type {HTMLTableRowElement} */
            const tr = event.target.parentElement;
            // tr.style.backgroundColor = 'yellow';
            tr.classList.toggle( 'selecionado' );
        };
    }
}


function adicionarAnime( anime ) {
    const tbody = document.querySelector( 'tbody' );
    const linha = `<tr>
        <td>${anime.nome}</td>
        <td>${anime.ano}</td>
        </tr>
    `;
    tbody.innerHTML += linha;
}

export function novo( event ) {
    // console.log( 'Você clicou em', event.target );
    indiceAnime = -1;
    const dialog = document.querySelector( 'dialog' );
    dialog.showModal();
}

/**
 * @param {Event} event
 */
export function salvar( event ) {
    // console.log( 'Você clicou em', event.target );
    event.preventDefault();

    const nome = document.getElementById( 'nome' ).value;
    const comprimento = nome.length;
    if ( comprimento < 2 || comprimento > 100 ) {
        alert( 'O nome deve ter de 2 a 100 caracteres.' );
        return;
    }

    const ano = parseInt( document.getElementById( 'ano' ).value );
    if ( isNaN( ano ) ) {
        alert( 'Por favor, informe um número no ano.' );
        return;
    }

    const anime = { nome: nome, ano: ano }; // ou { nome, ano }

    if ( indiceAnime < 0 ) { // Novo
        ANIMES.push( anime );
        adicionarAnime( anime );
        configurarCliqueNasLinhas();
    } else { // Alterar
        // Altera o elemento do array
        ANIMES[ indiceAnime ] = anime;
        // Altera a linha selecionada
        const tr = document.querySelectorAll( 'tbody tr' )[ indiceAnime ];
        const celulas = tr.querySelectorAll( 'td' );
        celulas[ 0 ].innerText = anime.nome;
        celulas[ 1 ].innerText = anime.ano.toString();
    }

    // Fecha o modal
    document.querySelector( 'dialog' ).close();
}

export function remover( event ) {
    const tr = document.querySelector( '.selecionado' );
    if ( ! tr ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }

    // Pede confirmação
    if ( ! confirm( 'Deseja mesmo remover?' ) ) {
        return;
    }

    const indice = tr.sectionRowIndex;
    ANIMES.splice( indice, 1 ); // Remove do array
    tr.remove(); // Se remove do DOM
}

export function pesquisar( event ) {
    event.preventDefault();
    const texto = document.getElementById( 'pesquisa' ).value;
    const filtrados = [];
    for ( const anime of ANIMES ) {
        if ( anime.nome.includes( texto ) ||
            anime.ano.toString().includes( texto )
        ) {
            filtrados.push( anime );
        }
    }
    preencherTabelaComAnimes( filtrados, true );
}


export function alterar( event ) {

    const tr = document.querySelector( '.selecionado' );
    if ( ! tr ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }

    indiceAnime = tr.sectionRowIndex;
    const anime = ANIMES.at( indiceAnime ); // []

    // Mostra o anime
    document.getElementById( 'nome' ).value = anime.nome;
    document.getElementById( 'ano' ).value = anime.ano.toString();

    // Muda o título
    document.getElementsByTagName( 'h2' )[ 0 ].innerText =
        'Alteração de Anime';

    document.querySelector( 'dialog' ).showModal();
}