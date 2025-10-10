import { Contato } from "./contato.js";

export class ContatoWeb extends Contato {

    /** @type {string} */
    #email = '';

    constructor( { nome, telefone, email } ) {
        super( { nome, telefone } );
        this.setEmail( email );
    }

    getEmail() { return this.#email; }
    setEmail( valor ) { this.#email = valor; }

    comoObjeto() {
        return { ...super.comoObjeto(), email: this.getEmail() };
    }

    clonar() {
        return new ContatoWeb( this.comoObjeto() );
    }
}
`