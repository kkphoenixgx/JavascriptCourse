import CalcPresenter from "../presenter/CalcPresenter.js";

export default class CalcView {

    #presenter = new CalcPresenter(this);

    //! não gostei disso naum
    numero1() {
        return document.getElementById("n1").value;
    }
    numero2() {
        return document.getElementById("n2").value;
    }
    operator() {
        return document.querySelector("select").value;
    }

    exibirResultado(resultado) {
        document.querySelector("output").innerText = resultado;
    }

    // -------- Eventos ----------

    /** *  @param { Function } callback  */
    onCalc() {

        document.querySelector("#calc").addEventListener("click", event => {
            event.preventDefault();

            this.#presenter.calcular();
        })

    }

    init() {
        this.onCalc();
    }

}