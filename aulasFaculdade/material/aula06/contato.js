export class Contato {

    /** @type {string} */
    #nome = '';
    /** @type {string} */
    #telefone = '';

    /**
     * Cria um contato.
     *
     * @param {{nome: string, telefone: string}}
     */
    constructor( { nome, telefone } ) {
        this.setNome( nome );
        this.setTelefone( telefone );
    }

    getNome() { return this.#nome; }
    setNome( valor ) { this.#nome = valor; }

    getTelefone() { return this.#telefone; }
    setTelefone( valor ) { this.#telefone = valor; }

    comoObjeto() {
        return { nome: this.#nome, telefone: this.#telefone };

        // 👉 ATENÇÃO: JAVASCRIPT *NÃO PERMITE* OBTER ATRIBUTOS *PRIVADOS* DINAMICAMENTE, INFELIZMENTE:
        //
        // const novo = {};
        // for ( const prop in this ) {
        //     console.log( prop );
        //     if ( prop.includes( '#' ) ) {
        //         const p = prop.substring( 1 );
        //         console.log
        //         novo[ p ] = this[ prop ];
        //     }
        // }
        // return novo;

    }

    clonar() {
        return new Contato( this.comoObjeto() );
    }
}


const c = new Contato( { nome: 'Ana', telefone: '9999999999' } );
console.log( c.comoObjeto() );

const c2 = new Contato( c.comoObjeto() );
console.log( c2.comoObjeto() );