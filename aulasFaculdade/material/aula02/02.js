let x;
// null representa a ausência de um objeto
// undefined representa a ausência de qualquer valor
// console.log( x );

const naoTrue = [ // Valores que avaliam como false
    undefined, null, 0, -0, /* 👀 */, '', false
];

for ( let i = 0; i < naoTrue.length; i++ ) {
    console.log(
        naoTrue[ i ] ? 'avalia' : 'não avalia',
        'como true'
    );
}

console.log( '-'.repeat( 80 ) );

for ( let i in naoTrue ) { // Navega nos índices
    console.log(
        naoTrue[ i ] ? 'avalia' : 'não avalia',
        'como true'
    );
}

console.log( '-'.repeat( 80 ) );

for ( const valor of naoTrue ) { // Navega nos valores
    console.log(
        valor ? 'avalia' : 'não avalia',
        'como true'
    );
}