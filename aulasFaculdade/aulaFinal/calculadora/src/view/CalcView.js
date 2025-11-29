export default class CalcView {

    //! não gostei disso naum
    numero1() {
        return document.getElementById("n1").value;
    }
    numero2() {
        return document.getElementById("n2").value;
    }

    exibirResultado(resultado) {
        document.querySelector("output").innerText = resultado;
    }

    // -------- Eventos ----------

    /** *  @param { Function } callback  */
    onCalc(callback) {
        document.querySelector("#calc").addEventListener("click", event => {
            event.preventDefault();
            callback();
        })
    }

}