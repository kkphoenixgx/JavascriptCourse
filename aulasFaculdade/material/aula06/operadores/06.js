function clonar( obj ) {
    return { ...obj };
}

const clonar2 = obj => ({ ...obj });

const c1 = { nome: 'Ana', email: 'ana@site.com' };
const c2 = clonar( c1 );
const c3 = clonar2( c1 );
console.log( c1 === c2 );
console.log( c1 === c3 );