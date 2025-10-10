export default class Contato {

    #nome = "";
    #telefone = "";

    static counter = 0;
    
    constructor(nome, telefone){
        this.nome = nome;
        this.telefone = telefone;
        Contato.counter++;
    }

    // ----------- Methods -----------


    comoObjeto(){
        return {
            nome : this.#nome,
            telefone : this.#telefone,
        }
    }

    clonar(){
        return new Contato(this.#nome, this.telefone);
    }


    // ----------- Getters and Setters -----------

    get nome(){
        return this.#nome;
    }
    get telefone(){
        return this.#telefone;
    }

    set nome(nome){
        if(nome === "") throw new Error("Nome invalido")

        this.#nome = nome
    }
    set telefone(telefone){
        const phoneRegex = /^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;

        if (phoneRegex.test(telefone)) {
            this.#telefone = telefone;
        }
        else{
            throw new Error("Telefone inválido")
        }

    }

}