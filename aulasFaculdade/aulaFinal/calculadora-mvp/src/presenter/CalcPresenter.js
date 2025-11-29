import Calculadora from "../model/Calculadora.js";

export default class CalcPresenter {

    #calcView = null;
    #calculadoraModel = new Calculadora();

    constructor(view) {
        this.#calcView = view;
    }

    calcular() {
        const n1 = this.#calcView.numero1();
        const n2 = this.#calcView.numero2();
        const operator = this.#calcView.operator();
        console.log(operator);

        try {
            const result = this.#calculadoraModel.calcular(n1, n2, operator);
            this.#calcView.exibirResultado(result)
        } catch (error) { this.#calcView.exibirResultado("Error: " + error.message) }

    }

}