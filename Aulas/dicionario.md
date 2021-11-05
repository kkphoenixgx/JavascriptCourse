# Dicionário javascript para todos os problemas

## Variáveis

* ### Declaração de variáveis

  let = só funciona no escopo
  const = variável não mutável
  var = variável normal

  declaração:
  > declaração  nome = x

### Strings

* **split('x')** = com essa função, dá pára criar um array com os itens de uma string de definindo x, sendo x o caractere que você você quer usar para separar, como um espaço entre 1 2 3 4 5, usando um split(' ') eu criaria um item de array para cada número;

* **Template string** = Você usa em uma variável ou em qualquer coisa que possa receber uma variável concatenada como texto a template string, fica muito mais fácil concatenar as coisas, você pode escrever coisas com a template string, escreva o seu texto normal com todos os caracteres e os espaços e quando quiser usar uma variável, utilize ${x} sendo x a variável, a template string deve estar em aspas simples '' para funcionar, lembra disso. Olha o exemplo de template string:

  ~~~javascript
  '${cliente} seu produto: ${produto} ficou pronto';
  ~~~

### Conversão de variáveis

* **parseInt()** = passar para inteiro;
* **parseFloat()** = passar para float;
* **toString()** = passar para string;

## Arrays

* **x.length** = para saber a quantidade de itens do array, x[y], sendo y o array que você quer, COMEÇA COM 0 e pode usar expressões numéricas.

* **x.push**() = adiciona algo a um array

* **x.pop**() = tira esse item x do array

* **x.splice**(index, quantidade) =  No splice, você fala qual item  do array que vc quer tirar com o index e a quantidade de itens contando dele que você quer tirar. exemplo para tirar um item splice(0, 1), vai tirar o item 0 do array e se fosse quantidade = 2, iria tirar o 0 e o 1

## Fors

* **for**

~~~javascript
for(variavel, até quando, o que fazer toda vez){
    // bloco de código do que fazer para cada x.
}
~~~

* **forEach**

~~~javascript
array.forEach( function(value, index){
    console.log(value);
})
~~~

* **for in**

~~~javascript
for(variavel in objeto){
    //bloco de código para cada atributo ou function do objeto
}
~~~

* **for of**

~~~javascript
for(variavel of x){
    //bloco de código para cada valor de x
}
~~~

## Switch

Exemplo:

~~~js
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
~~~

## Functions

* ### function

  ~~~javascript
  function Somar(valor1, valor2){
      return valor1 + valor2
  }
  ~~~

* ### anonymous function

~~~js
//uma function anonima não possui nome e pode ser criada como um call back de uma outra função
Funcionário.calcSalary (IdDoFuncionario, function(HorasDeTrabalho, salario){
    const taxa = 1.6
    return `O valor é ${(HorasDeTrabalho * salario) + taxa}`
})
/* 
Uma função assim é dificil explicar fora de contexto, mas seu conceito é 
extremamente simples, ela é uma função que não precisa ser declarada no
escopo0 global, que só vai gastar processamento na hora de usar ela 

Explicando,ela basicamente ela calcula para um funcionário de uma empresa o 
valor  do seu salário e depois envia esse valor para o banco de dados na 
classe, com o IdDoFuncionario, então esse método userSalary para não fazer 
outro método, pode pedir essas variáveis para uma função anonima para não 
chamar outro  método para calcular o salário e evitar refatoração em multiplos 
lugares da classe. 
*/
~~~

* ### Exemplo arrow function

~~~javascript
/* 
Esse é um simples exemplo de como fazer uma arrow function, 
mas ela é geralmente usada como uma call back.
*/
(x1, x2, operador) => {
    return x1 operador x2;
}
~~~

## Eventos

  Para usar um evento no js é so usar o addEventListener(x), sendo x o evento que você quer escutar:

* **click** = quando clicar;
* **dbclick** = quando acontece dois clicks.
* **contextmenu** = quando clica com o botão direito;
* **drag** = quando puxar;
* **mouseover** = quando o mouse em cima do botão;
* **mouseout** = quando o mouse sai do botão;
* **mouseup** = quando o mouse tá po cima de um elemento;
* **mousedown** = quando o mouse tá por baixo de um elemento.

  Exemplo:

  ~~~js
      document.addEventListener('click' event =>{

        console.log(click);

    });
  ~~~

## DOM

* ### window
  Uma coisa muito importante a se ressaltar é que os métodos que estão com (.window) é por que não precisam ser chamados pelo .window, pois já estão no window

  * #### window.isNaN(x)

    Essa função valida se algo é um número ou não, retornando um boolean de true ou false e ele valida se é um número ou não mesmo se for uma string, validando false se for um número e true se não for.

  * #### (window.)sessionStorage

    Session storage é basicamente uma forma de gravar dados da sessão do usuário, esses dados serão perdidos assim que ele fechar a aba, mesmo que ele abra a mesma aba novamente, porém caso ocorra um f5 a informação continua ali.  
    Lembrando que nem o SessionStorage nem o LocalStorage conseguem guardar todo um objeto, caso seja feito algo do tipo vai aparecer a string do object, aquela mensagem de object: object...  
    Então o necessario para guardar uma informação dessa forma é fazendo um array e percorrendo toda essa seção de atributos de um JSON.  
    Para fazer um insert de um sessionStorage é simplesmente fazendo um **sessionStorage.setItem("x","y")** sendo x o nome do valor e y o valor.

    ~~~js
    sessionStorage.setItem("name","value")
    ~~~

    Para acessar as informações de um session ou local Storage, você ao inves de set, sessionStorage.getItem("x");

    ~~~javascript
    sessionStorage.getItem("name");
    ~~~

  * #### (window.)eval(x)

    O eval basicamente calcula uma expressão numerica em string

    ~~~js
    eval('2+2');
    //isso resulta em 4 (number).
    ~~~

## Classes

* ### Exemplo classe em js

~~~javascript
class ExemploClass{

    //criando variáveis sem valor prévio
    this.code;
    this.name;

    // construtor
    constructor(name, code){
        this.name = name;
        this.code = code;
    }

    // criando um método
    exibirCliente(name, code){
        return console.log('Cliente : ${name} Cadastro: ${code}');
    }
}

// instanciando 
let Osvaldo = new ExemploClass();

console.log(Osvaldo.name, Osvaldo.code);
console.log(ExibirCadastro(Osvaldo.name, Osvaldo.code));
~~~

* ### Exemplo antigo de classes js

~~~js
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
~~~

## Objetos pré determinados

* ### Date

  * **x = new Date( )** = Dá para pegar a data formatada

  * **x.getDate** = pega a data de hoje

  * **x.getFullYear** = pega o ano com 4 dígitos  

  * **x.getMonth** = e month começa em 0 = Pega o mês  

  * **x.toLocaleDateString("x")** = pega a data do formato local  

  * **x.getTime()** = retorna em o timeStamp em  milissegundos

## Métodos para elemento html

* **x.preventDefault()** = Que basicamente fala para parar tudo o que esse cara disparou, pode ser usado no event como parametro

* **querySelector(cssSelector)**: = Seleciona um objeto html, que pode ser por exemplo colocado em uma variável  
exemplos :  

    > var element = querySelector(#id) para selecionar id  
      var element = querySelector(.class) para classe  

    E suporta todas as outras formas via seletor css. Com isso pode-se acessar métodos desse elemento html.

* **querySelectorAll()** = Ele faz basicamente a mesma coisa que o querySelector() acima, porém o querySelectorAll() seleciona vários elementos html somente colocando , e dizendo o próximo.

    var elements = querySelectorAll(seletorCss1, seletorCss2)

## JSON

* ### O que é json?

  Json nada mais é do que um objeto que pode ser lido de diversas linguagens em várias formas e é um objeto que pode ser moldado muito facilmente, ele é ótimo para ser usado em banco de dados e transferência de informação. exemplo:

  ~~~javascript
    user = {
        nome,
        idade,
        sexo,
        email,
    }
  ~~~

* ### Criando um json com uma variável já com um valor

    ~~~javascript
    Json{
        "variableName1" : 10,
        "variableName2" : "hola"
    }
    ~~~

* ### Sobrescrever uma variável

  ~~~javascript
  Json{
      "variableName1" : 10,
      "variableName2" : "hola"
  }

  Json.variableName1 = 15;
  ~~~

* ###  Criando uma nova variável em um json

  ~~~javascript
  Json = {}
  Json.newVariable = x
  ~~~

* ### Deletando uma variável em Json

  ~~~javascript
  delete jsonName.variableName;
  ~~~

* ### Metodos utilizaveis em JSONs
  
  * **JSON.stringify(x, ...)** = Isso transforma um json em um json, só que todo em texto, esse é o principal motivo de um json ser tão incrível, isso torna os dados muito moldaveis.
  
  * **JSON.parse(x)** = O JSON.parse transforma um objeto stringficado em um objeto json novamente
