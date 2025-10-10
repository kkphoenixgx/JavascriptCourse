// EXERCÍCIOS
// 1) Crie um select para o usuário entrar com a operação matemática desejada,
// sendo possível selecionar uma das quatro operações matemáticas básicas.

window.onload = function() {

    const botao = document.getElementsByTagName('button')[ 0 ];
    // const botao = document.querySelector( 'button' );
    // const botoes = document.querySelectorAll( 'button' );

    botao.onclick = function( event ) {

        event.preventDefault(); // Previne o comportamento do FORM

        const n1 = document.getElementById( 'n1' );
        const n2 = document.getElementById( 'n2' );
        const out = document.querySelector( 'output' );

        const numero1 = parseFloat( n1.value );
        if ( isNaN( numero1 ) ) {
            out.textContent = 'Informe um valor numérico no Número 1.';
            return;
        }
        const numero2 = parseFloat( n2.value );
        if ( isNaN( numero2 ) ) {
            out.textContent = 'Informe um valor numérico no Número 2.';
            return;
        }

        const operacao = document.getElementById( 'op' ).value;
        let resultado = 0;
        switch ( operacao ) {
            case '+': resultado = numero1 + numero2; break;
            case '-': resultado = numero1 - numero2; break;
            case '*': resultado = numero1 * numero2; break;
            case '/': resultado = numero1 / numero2; break;
            default: resultado = 'Operação não suportada.';
        }
        out.textContent = resultado.toString();
    };

};