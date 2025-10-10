function imprimir( [ primeiro, , terceiro ] ) {
    console.log( primeiro, terceiro );
}

function imprimir2( [ primeiro, , terceiro, ...outros ] ) {
    console.log( primeiro, terceiro, outros.at( -1 ) ); // último é impresso
}


imprimir( [ 10, 20, 30, 40, 50, 60 ] );
imprimir2( [ 10, 20, 30, 40, 50, 60 ] );