export default class Contato {

    #nome = "";
    #telefone = "";

    constructor(nome, telefone){
        this.nome = nome;
        this.telefone = telefone;
    }
    
    // constructor( { nome, telefone } ){
    //     this.nome = nome;
    //     this.telefone = telefone;
    // }

    comoObjeto(){
        return {
            nome : this.#nome,
            telefone : this.#telefone,
        }
    }

    clonar(){
        return new Contato(this.#nome, this.telefone);
    }


    get nome(){
        return this.#nome;
    }
    get telefone(){
        return this.#telefone;
    }

    set nome(nome){
        this.#nome = nome
    }
    set telefone(telefone){
        this.#telefone = telefone;
    }

}