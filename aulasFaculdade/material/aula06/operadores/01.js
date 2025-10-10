function concatenar( array1, array2 ) {
    return [ ...array1, ...array2 ];
}

console.log(
    concatenar( [ 'hello', 'world'], [ 1, 2, 3, 4 ] )
);