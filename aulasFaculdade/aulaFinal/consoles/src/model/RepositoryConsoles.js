import Videogame from "./Videogame.js";

export default class RepositoryConsoles {

    async consulta() {
        const consultaVideogames = await fetch('http://localhost:3000/videogames');
        if (!consultaVideogames.ok) throw new Error("Erro ao consultar videogames!");

        const videogames = await consultaVideogames.json();
        return videogames.map(videogame => new Videogame(videogame));
    }


}