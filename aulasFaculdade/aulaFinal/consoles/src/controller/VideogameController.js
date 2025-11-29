import RepositoryConsoles from "../model/RepositoryConsoles";

export default class VideogameController {

    #view = null;
    #repository = new RepositoryConsoles();

    constructor(view) {
        this.#view = view;
    }

    async buscarVideogames() {
        try {
            const videogames = this.#repository.consulta();
            this.#view.exibirVideogames(videogames);
        } catch (error) { this.#view.exibirErro(error) }
    }

}