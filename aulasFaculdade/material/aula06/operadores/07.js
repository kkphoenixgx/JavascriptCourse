function clonar( obj, outro ) {
    let novo = { ...obj };
    for ( const prop in outro ) {
        novo[ prop ] = outro[ prop ];
    }
    return novo;
}

function clonar2( obj, outro ) {
    return { ...obj, ...outro };
}