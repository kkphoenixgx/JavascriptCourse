/**
 * Desenha os filmes informados
 *
 * @param {Array<{nome: string, genero: string, ano: number}>} filmes
 */
export function desenharFilmes( filmes ) {
    const tbody = document.querySelector( 'tbody' );

    // Remove todos os filhos
    while ( tbody.lastChild ) {
        tbody.removeChild( tbody.lastChild );
    }

    const fragmento = document.createDocumentFragment();

    // const tbody = document.getElementsByTagName( 'tbody' )[ 0 ];
    for ( const f of filmes ) {
        const linha = filmeParaLinha( f );
        fragmento.appendChild( linha );
    }
    tbody.appendChild( fragmento );
}

/**
 * Retorna uma linha de tabela para o filme informado.
 *
 * @param {{nome: string, genero: string, ano: number}} filme
 * @returns {HTMLTableRowElement}
 */
function filmeParaLinha( filme ) {
    const linha = document.createElement( 'tr' );
    linha.addEventListener( 'click', linhaClicada );

    const tdNome = document.createElement( 'td' );
    tdNome.innerText = filme.nome;

    const tdGenero = document.createElement( 'td' );
    tdGenero.innerText = filme.genero;

    const tdAno = document.createElement( 'td' );
    tdAno.innerText = filme.ano.toString();

    linha.append( tdNome, tdGenero, tdAno );

    return linha;
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

    const filmes =  obterFilmes();
    filmes.push( filme );

    salvarFilmes( filmes );

    // Adiciona na tabela
    document.querySelector( 'tbody' ).appendChild( filmeParaLinha( filme ) );

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

// window.linhaClicada = linhaClicada; // Coloca como global


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
    const filmes = obterFilmes();
    filmes.splice( linha.sectionRowIndex, 1 );
    // sectionRowIndex é o índice na seção que ele está (elemento pai -> tbody)

    salvarFilmes( filmes );
}

/** @returns {Array<{nome:string, genero:string, ano:number}>} */
function obterFilmes() {
    return JSON.parse( localStorage.getItem( 'filmes' ) || '[]' );
}


function salvarFilmes( filmes ) {
    localStorage.setItem( 'filmes', JSON.stringify( filmes ) );
}


export function pesquisar( event ) {
    event.preventDefault();
    const texto = document.getElementById( 'pesquisa' ).value;
    const filmes = obterFilmes()
        .filter( filme => filme.nome.includes( texto ) );
    desenharFilmes( filmes );
}


function paginaAtual() {
    const pagina = localStorage.getItem( 'paginaAtual' );
    return pagina === null ? 1 : Number( pagina );
}

function salvarPaginaAtual( pagina ) {
    localStorage.setItem( 'paginaAtual', pagina.toString() );
}

const ITENS_POR_PAGINA = 10;

function totalPaginas( filmes ) {
    // console.log( filmes, filmes.length );
    return Math.ceil( filmes.length / ITENS_POR_PAGINA );
    // let numeroPaginas = Math.trunc( filmes.length / ITENS_POR_PAGINA ); // 4
    // const temResto = ( filmes.length % ITENS_POR_PAGINA ) > 0;
    // if ( temResto ) {
    //     numeroPaginas++;
    // }
    // return numeroPaginas;
}


export function irParaAnterior() {
    // 1 ->  0..9
    // 2 -> 10..19
    // 3 -> 20..29
    let pagina = paginaAtual(); // 2 -> 10..19
    if ( pagina > 1 ) {
        pagina--;
        salvarPaginaAtual( pagina );
    }
    const indiceInicial = pagina * ITENS_POR_PAGINA - ITENS_POR_PAGINA;
    let indiceFinal = pagina * ITENS_POR_PAGINA - 1;

    let filmes = obterFilmes();

    const indiceUltimoElemento = filmes.length - 1;
    if ( indiceFinal > indiceUltimoElemento ) {
        indiceFinal = indiceUltimoElemento;
    }

    let numeroPaginas = totalPaginas( filmes );
    console.log( numeroPaginas );

    filmes = filmes
        .filter( ( e, i ) => i >= indiceInicial && i <= indiceFinal );
    desenharFilmes( filmes );

    document.getElementById( 'anterior' ).disabled = pagina < 2;
    document.getElementById( 'proxima' ).disabled = pagina >= numeroPaginas;
}



export function irParaProxima() {
    // 1 ->  0..9
    // 2 -> 10..19
    // 3 -> 20..29
    let pagina = paginaAtual(); // 2 -> 10..19

    // 50 / 10 -> 5
    // 45 / 10 -> 4.5

    let filmes = obterFilmes();
    let numeroPaginas = totalPaginas( filmes );
    console.log( numeroPaginas );

    if ( pagina < numeroPaginas ) {
        pagina++;
        salvarPaginaAtual( pagina );
    }

    const indiceInicial = pagina * ITENS_POR_PAGINA - ITENS_POR_PAGINA;
    let indiceFinal = pagina * ITENS_POR_PAGINA - 1;
    const indiceUltimoElemento = filmes.length - 1;

    if ( indiceFinal > indiceUltimoElemento ) {
        indiceFinal = indiceUltimoElemento;
    }

    filmes = filmes
        .filter( ( e, i ) => i >= indiceInicial && i <= indiceFinal );
    desenharFilmes( filmes );

    document.getElementById( 'anterior' ).disabled = pagina < 2;
    document.getElementById( 'proxima' ).disabled = pagina >= numeroPaginas;
}