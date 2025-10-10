const numeros = [ 1, 2, 3, 4, 5 ];

numeros.push( 6, 7, 8 ); // Adiciona no fim

numeros.unshift( 0, -1, -2 ); // Adiciona no início

numeros.shift(); // Remove do início (0)

numeros.pop(); // Remove do final (8)

numeros.splice( 2, 1 ); // Vai remover o 1

const indiceDo4 = numeros.indexOf( 4 );

numeros.reverse();

console.log( numeros, indiceDo4 );

numeros.push( 10 );

numeros.sort( function( n1, n2 ) {
    // if ( n1 === n2 ) { return 0; }
    // if ( n1 > n2 ) { return 1; }
    // return -1;
    return n1 - n2; // Crescente. Trocar para n2-n1 para decrescente.
} );

// numeros.sort( function( n1, n2 ) {
//     if ( n1.toString() === n2.toString() ) { return 0; }
//     if ( n1.toString() > n2.toString() ) { return 1; }
//     return -1;
// } );

console.log( numeros.join( ', ' ) );
