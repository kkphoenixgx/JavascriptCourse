export default class Calculadora {

    calcular(n1, n2) {
        const x = Number(n1);
        const y = Number(n2);

        if (isNaN(x) || isNaN(y)) throw new Error("Valores precisam ser números");

        return x + y;
    }

}