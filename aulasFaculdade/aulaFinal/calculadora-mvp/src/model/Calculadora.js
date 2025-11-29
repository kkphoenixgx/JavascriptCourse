export default class Calculadora {

    calcular(n1, n2, operator) {
        const x = Number(n1);
        const y = Number(n2);
        if (isNaN(x) || isNaN(y)) throw new Error("Valores precisam ser números");

        let result;

        switch (operator) {
            case "soma":
                result = this.somar(x, y);
                break;
            case "subs":
                result = this.subtracao(x, y);
                break;
            case "mult":
                result = this.multiplicacao(x, y);
                break;

            case "divi":
                if (y === 0) throw new Error("infinity")
                result = this.division(x, y);
                break;

            default:
                throw new Error("Operação não suportada")
        }

        return result;

    }

    somar(x, y) { return x + y; }
    subtracao(x, y) { return x - y; }
    multiplicacao(x, y) { return x * y; }
    division(x, y) { return x / y; }


}