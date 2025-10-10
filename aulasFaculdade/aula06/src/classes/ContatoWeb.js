import Contato from "./Contato.js";

export default class ContatoWeb extends Contato{

    #email = "";

    constructor(nome, telefone, email){
        super(nome, telefone);
        this.email = email;
    }

    comoObjeto(){
        return {
            // nome : super.nome,
            // telefone : super.telefone,
            ...super.comoObjeto(),
            email : this.email,
        }
    }

    clonar(){
        return new ContatoWeb(super.nome, super.telefone, this.email);
    }


    
    get email(){
        return this.#email;
    }
    set email(email){
        this.#email = email;  
    }

}