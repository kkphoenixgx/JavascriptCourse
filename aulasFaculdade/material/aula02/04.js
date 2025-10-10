const f = function( x, y = 5 ) {
    return x + y;
};
console.log( f( 10, 20 ) );
console.log( f( 10 ) );

const g = f;
console.log( g( 10, 20 ) );

console.log( 10 / undefined ); // NaN
console.log( 10 / 0 ); // Infinity
console.log( -10 / 0 ); // -Infinity

