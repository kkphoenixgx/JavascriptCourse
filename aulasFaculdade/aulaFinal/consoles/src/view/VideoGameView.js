import VideogameController from "../controller/VideogameController";

export default class VideogameView {

    #controladoraVideogames = new VideogameController(this);

    /** * @param {Videogame[]} videogames  */
    exibirVideogames(videogames) {

        document.querySelector('tbody').append(
            ...videogames.map(videogame => this.criarLinha(videogame))
        )

    }
    exibirErro(error) {
        alert(error);
    }

    criarLinha({ id, nome, frabricante }) {
        const template = document.querySelector("template");
        const linha = template.content.cloneNode(true);

        linha.querySelector(".e1").innerText = id;
        linha.querySelector(".e2").innerText = nome;
        linha.querySelector(".e3").innerText = frabricante;

        return linha;
    }

    init() {
        this.#controladoraVideogames.buscarVideogames();
    }

}