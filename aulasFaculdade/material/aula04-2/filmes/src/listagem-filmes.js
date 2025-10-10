/**
 * Desenha os filmes informados
 *
 * @param {Array<{nome: string, genero: string, ano: number}>} filmes
 */
export function desenharFilmes( filmes ) {
    const tbody = document.querySelector( 'tbody' );
    // const tbody = document.getElementsByTagName( 'tbody' )[ 0 ];
    for ( const f of filmes ) {
        const linha = filmeParaLinha( f );
        tbody.innerHTML += linha;
    }
}

/**
 * Retorna uma linha de tabela para o filme informado.
 * @param {{nome: string, genero: string, ano: number}} f
 */
function filmeParaLinha( f ) {
    return `
        <tr onclick="linhaClicada( event )" >
            <td>${f.nome}</td>
            <td>${f.genero}</td>
            <td>${f.ano}</td>
        </tr>`;
}


export function novo() {
    document.querySelector( 'dialog' ).showModal();
}

/**
 * @param {Event} event
 */
export function salvar( event ) {
    event.preventDefault();

    const output = document.querySelector( 'output' );

    const nome = document.getElementById( 'nome' ).value;
    const tamanhoNome = nome.length;
    if ( tamanhoNome < 4 || tamanhoNome > 50 ) {
        output.innerText = 'O nome deve ter de 4 a 50 caracteres.';
        return;
    }

    const genero = document.getElementById( 'genero' ).value;

    const ano = parseInt( document.getElementById( 'ano' ).value );
    if ( isNaN( ano ) ) {
        output.innerText = 'O ano deve ser um número.';
        return;
    }

    const filme = { nome: nome, genero: genero, ano: ano };

    // let filmes = localStorage.getItem( 'filmes' );
    // if ( filmes == null || filmes == '' ) {
    //     filmes = [];
    // } else {
    //     filmes = JSON.parse( filmes );
    // }

    // const filmes = JSON.parse( localStorage.getItem( 'filmes' ) ) || [];

    const filmes = JSON.parse(
        localStorage.getItem( 'filmes' ) || '[]'
    );
    filmes.push( filme );

    localStorage.setItem( 'filmes', JSON.stringify( filmes ) );

    // Adiciona na tabela
    document.querySelector( 'tbody' ).innerHTML += filmeParaLinha( filme );

    document.querySelector( 'form' ).reset(); // Limpa o formulário

    document.querySelector( 'dialog' ).close(); // Fecha o modal
}

/**
 * @param {Event} event
 */
function linhaClicada( event ) {
    console.log( event.target );
    /** @type {HTMLTableRowElement} */
    const linha = event.target.parentElement;

    // Remove a seleção atual
    const selecao = document.querySelector( '.selecionado' );
    if ( selecao ) {
        selecao.classList.remove( 'selecionado' );
    }

    // if ( linha.classList.contains( 'selecionado' ) ) {
    //     linha.classList.remove( 'selecionado' );
    // } else {
    //     linha.classList.add( 'selecionado' );
    // }
    linha.classList.toggle( 'selecionado' );
}

window.linhaClicada = linhaClicada; // Coloca como global


export function remover( event ) {
    /** @type {HTMLTableRowElement} */
    const linha = document.querySelector( 'tbody tr.selecionado' );
    if ( ! linha ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }
    if ( ! confirm( 'Remover ?' ) ) {
        return;
    }
    linha.remove();

    /** @type Array */
    const filmes = JSON.parse( localStorage.getItem( 'filmes' ) || '[]' );
    filmes.splice( linha.sectionRowIndex, 1 );
    // sectionRowIndex é o índice na seção que ele está (elemento pai -> tbody)

    localStorage.setItem( 'filmes', JSON.stringify( filmes ) );
}