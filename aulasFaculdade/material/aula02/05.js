const tel = {
    ddd: '22',
    numero: '2527-1727',
    formatar: function() {
        return '(' + this.ddd + ') ' + this.numero;
    }
};

tel[ 'ddd' ] = '21';
tel.numero = '999887766';

console.table( tel );

for ( const prop in tel ) {
    console.log( 'O', prop, 'do telefone é', tel[ prop ] );
}

console.log( tel.formatar.name );
console.log( tel.formatar.length );
console.log( tel.formatar.arguments );
console.log( tel.formatar() );

const f = tel.formatar.bind( tel ); // Use o tel como this
console.log( f() );