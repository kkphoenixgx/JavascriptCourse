let gatos = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

let temporizador;

window.onload = iniciar;
window.onkeydown = lerTecla;

function iniciar() {
    document.getElementById( 'avancar' ).onclick = avancar;
    document.getElementById( 'voltar' ).onclick = voltar;
    document.getElementById( 'parar' ).onclick = parar;
    mostrarGato();

    temporizador = setInterval( avancar, 3000 );
}

function mostrarGato() {
    const img = document.querySelector( 'img' );
    const caminho = gatos[ 0 ];

    const indiceBarra = caminho.lastIndexOf( '/' );
    const nome = 'Gato ' +
        caminho.substring( indiceBarra + 1, indiceBarra + 3 ); // "01"

    img.src = caminho;
    img.alt = nome;
}

function avancar() {
    // const removidos = gatos.splice( 0, 1 ); // Remove do início
    const removido = gatos.shift(); // Remove do início
    gatos.push( removido );
    mostrarGato();
}

function voltar() {
    // const removidos = gatos.splice( gatos.length - 1, 1 ); // Remove do fim
    const removido = gatos.pop();
    gatos.unshift( removido );
    mostrarGato();
}

function lerTecla( event ) {
    if ( event.key === 'ArrowRight' ) {
        avancar();
    } else if ( event.key === 'ArrowLeft' ) {
        voltar();
    }
}

function parar() {
    clearInterval( temporizador );
}