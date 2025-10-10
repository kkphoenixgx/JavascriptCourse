// function entreMinMax( numeros, min, max ) {
//     return numeros.filter( e => e >= min && e <= max );
// }

const entreMinMax =
    ( numeros, min, max ) => numeros.filter( e => e >= min && e <= max );

console.log( entreMinMax( [ 10, 20, 30, 40, 50 ], 20, 40 ) );