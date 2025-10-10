export function concatena(arrayOne, arrayTwo){
    return [...arrayOne, ...arrayTwo];
}

// ------------- 2 -------------


export function concatenaFor(...arrays){
    let novo = [];
    for (const value of arrays) {
        novo.push(...value);
    }

    return novo;
}

export function concatenaMap(...arrays) {
    let novo = [];
    arrays.forEach(value=>{
        novo.push(...value)
    })

    return novo;
}

export function concatenaForeac(...arrays) {
    let novo = [];
    arrays.forEach(value=>{
        novo.push(...value)
    })

    return novo;
}

// ------------- 3 -------------

export function imprimePrimeiroETerceiro(primeiro, _, terceiro, ...array) {
    console.log("imprime primeiro e terceiro: ", primeiro, terceiro);
}

export function imprimePrimeiroETerceiroDois( [primeiro, _, terceiro] ) {
    console.log("imprime primeiro e terceiro: ", primeiro, terceiro);
}

// ------------- 4 -------------

export function imprimeApos2( primeiro, segundo, ...array) {
    console.log("Imprime após 2:", ...array);
}


// ------------- 5 -------------

export function imprimeEmail( { email }) {
    console.log("Imprime email: ", email);
}

// ------------- 6 -------------

export function clonar(obj) {
    return { ...obj }
}

// ------------- 7 -------------

export function clonarESobreescrever( obj, secondObj ) {
    console.log({ ...obj, ...secondObj });
}





// ------------- 8 -------------

export function cloneSemElemento( elemento, arraySerClonado ) {
    
    let newArray = []

    for (let value of arraySerClonado) {
        
        if (value != elemento) newArray = [ ...newArray, value ]
        
    }

    return newArray;
}


