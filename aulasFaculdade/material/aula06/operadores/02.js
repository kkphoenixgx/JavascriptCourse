function concatenar( ...arrays ) {
    let novo = [];
    for ( const atual of arrays ) {
        novo.push( ...atual );
    }
    return novo;
}

function concatenar2( ...arrays ) {
    let novo = [];
    arrays.forEach( atual => novo.push( ...atual ) );
    return novo;
}


console.log(
    concatenar( [ 'hello', 'world'], [ 1, 2, 3, 4 ], [ 'Ana', 'Bia' ] )
);

console.log(
    concatenar2( [ 'hello', 'world'], [ 1, 2, 3, 4 ], [ 'Ana', 'Bia' ] )
);

console.log(
    [ [ 'hello', 'world'], [ 1, 2, 3, 4 ], [ 'Ana', 'Bia' ] ].flat()
);


// const c = ( ...arrays ) => arrays.reduce( ( prev, curr ) => [ ...prev, ...curr ], [] );

// console.log( c( [ 'hello', 'world'], [ 1, 2, 3, 4 ], [ 'Ana', 'Bia' ] ) );