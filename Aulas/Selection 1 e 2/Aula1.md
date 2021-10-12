Refazendo as aulas para relembrar e colocar tudo em ordem
para terminar o curso                               13/06/21


mod 4 - Introdução ao javascript                    04/04/21

tudo em js é case sensitive. 
Como já sabemos, a tag script está fortemente ligada ao 
js, é pela tag src que podemos definir onde está o 
arquivo js que vai rodar o código. que fica no body do
site.

para comentar no js é tudo nos conformes, /**/ e // 
tudo certo.

para criar variáveis no js é só usar o var ou o let
e constantes com const. 

o var declara variáveis normais, porém o let só dá para usar
no escopo de onde essa variável foi criada.

Tipos de dados no js:


string = Linha de texto.
number = float ou decimal, números são números.
objetos = Array, data
boolean = verdadeiros e falsos

type of = mostra o tipo da variável
instance of = mostra a instância.

tem funções para conversão de variáveis:

parseInt() passar para inteiro 
parseFloat() passar para float
toString() passar para string

Operadores normais.

console.log no javascript é para vc escrever no console 
o que tiver nas aspas, tipo um echo ou um println 

if e else é normal.


SEMPRE USA SWITCH QUANDO VC JÁ SABE OS RESULTADOS.

o switch é normal também.

Exemplo switch:
    switch(cor){
        case "verde":
        console.log("siga");
        break;

        case "amarelo":
        console.log("atenção");
        break;

        case "vermelho":
        console.log("pare");
        break;

        default:
        console.log("sei lá");
    }

o foreach também é normal.

Tem o famoso concatenador mutante do js que é bem legal

se chama template string.

que dentro de parenteses, você pode fazer aspas simples
com variáveis declaradas por ${} e ainda pode escrever
dentro da variável.

console.log('${cliente} seu produto: ${produto} ficou pronto')

simplesmente incrível.

mod5                                                 09/04/20

funções e objetos

tipos de funções:

anonima
function
arrow function

function cria normal

function somar(){

    return se tiver que retornar

}

eval é uma função que se cria dentro de outra função para 
se usar a função dentro do eval :) que valida por exemplo
um return como algo que deve ser executado.

exemplo eval():
    function calc(x1, x2, operador){

        return eval('${x1} ${operador} ${x2}');
    }

    let result = calc(1, 2, "+");
    console.log(result);

uma função anonima é feita somente tirando o nome da função
e definindo ela entre parenteses e você pode usar ela 
em parenteses depois do parenteses que você definiu 

exemplo function anonima:
    (function calc(x1, x2, operador){

        return eval('${x1} ${operador} ${x2}');
    })(let result = 1, 2, "+")

    console.log(result);

exemplo arrow function é mais rápido e com ela, dá para usar
informações de fora da função dentro da função, como uma 
variável usada fora do escopo ou uma constante.

arrow function:
    let calc = (x1, x2, operador) => {

        return eval('${x1} ${operador} ${x2}');
    }

    console.log(calc));

call back é uma função de retorno de dentro de uma função.
guarda isso, isso é um conceito usado bastante frequêntemente

Dom é a overview da janela do site ;-; eu entendi na hora
assim, vc também tem que entender, é as janelinhas com as 
tabs

dá para selecionar a window como uma classe.

MIND BLOW;

ok, voltando, dá para fazer isso mesmo, olha:

document: site (o documento)
window: a janela do browser
exemplo window class:
    window.addEventListener('focus' event =>{

        console.log(focus);

    });

exemplo document class:
    document.addEventListener('click' event =>{

        console.log(click);

    });

No js, para trabalhar com tempo, tem uma classe chamada
de Date que tem seus métodos e funções sobre o tempo.

com Date.now() por exemplo dá para pegar o timeStamp
e se você não se lembra o que é o time stamp
é os milissegundos contados dês de a criação da linguagem c
que no js tem +3 casas do que nas outras.

Date:
    x = new Date() Dá para pegar a data formatada;
    x.getDate = pega a data de hoje
    x.getFullYear = pega o ano com 4 dígitos
    x.getMonth e month começa em 0 = Pega o mês
    x.toLocaleDateString("x") = pega a data do formato local

Nos arrays, dizemos que a variável é um array colocando 
[] para definir a variável como um array.

Array:
    x.length = para saber a quantidade de itens do array.
    x[y], sendo y o array que você quer, COMEÇA COM 0.

O array também é metamórfico, ele se adapta, dá para 
fazer o que você quiser com a informação do array depois 
de retira-ló.

O foreach é um método para fazer um laço de repetição 
que é para cada, basicamente, para cada x você faz isso.
dá para fazer um console.log para cada array por exemplo.

Foreach:
    x.forEach(function(value, index){

        console.log(x);
    
    })

Orientação a objeto tá normal... 

com this, new...

obs: objeto é quando você instância uma classe como uma
variável.

Dá para criar classes com funções anonimas meu amigo.

AINDA ESTOU EM cHOQUE, porém pelo que entendi...

dá para criar uma classe do jeito tradicional que eu já
vi em java instânciando uma função anonima, porém para 
fazer a nova classe do js você usa a forma convencional que 
foi mudada pelo js...

Exemplos :

Exemplo antigo no js:

    let ExemploClass = function(){

    this.name;
    this.code;

    var ExibirCadastro = function(name, code){
        return console.log('Cliente : ${name} Cadastro: ${code}');
    }
    }

    let Osvaldo = new ExemploClass();

    console.log(Osvaldo.name, Osvaldo.code);
    console.log(ExibirCadastro(Osvaldo.name, Osvaldo.code));

um método construtor é um método padrão que faz logo quando 
se instância nos parenteses.

para criar um método construtor, se usa a palavra 
constructor(){}
e dento do escopo, dá para criar esses métodos e funções.

Exemplo novo js:

    class ExemploClass{

        constructor{

            this.name;
            this.code;

        }

        exibirCliente(name, code){
            return console.log('Cliente : ${name} Cadastro: ${code}');
        }
    }

    let Osvaldo = new ExemploClass();

    console.log(Osvaldo.name, Osvaldo.code);
    console.log(ExibirCadastro(Osvaldo.name, Osvaldo.code));

