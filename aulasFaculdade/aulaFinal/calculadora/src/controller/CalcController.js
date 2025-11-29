import Calculadora from "../model/Calculadora.js";
import CalcView from "../view/calcView.js";

export default class CalcController {

    #calcView = new CalcView();
    #calculadoraModel = new Calculadora();

    calcular() {
        const n1 = this.#calcView.numero1();
        const n2 = this.#calcView.numero2();

        try {
            const result = this.#calculadoraModel.calcular(n1, n2);
            this.#calcView.exibirResultado(result)
        } catch (error) { this.#calcView.exibirResultado("Error: " + error.message) }

    }

    configurate() {
        this.#calcView.onCalc(this.calcular.bind(this))
    }

}