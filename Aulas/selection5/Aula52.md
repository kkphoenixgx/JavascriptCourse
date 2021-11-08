# Ajax com XMLHttpRequest

Mod 81 -- **04/11/21**

**Ajax = Assincrono javascript xml.**.

Sincrono = processo feito por resposta ao cliente.
Assincrono = é um processo que não foi pedido pelo cliente mas foi feito.  

Existe hoje em dia melhores processos para realizar requisições assincronas, porém como desenvolvedor js, vamos entender como funciona o xml.

## Contexto histórico

Porém antes vamos entender o que significa xhr. **Xhr significa xml http request**, e o xml no nome, era um tipo de arquivo que antigamente era usado para comunicar duas plataformas de linguagens diferentes, como java e Ruby, hoje em dia o xml foi substituido pelo json até por que é muito mais simples.  
É por isso também que o ajax tem esse x no final, como destacado no começo da nota, porém hoje em dia o Ajax não precisa necessariamente ser escrito em xml, ele pode ser escrito também com qualquer coisa, então hoje em dia o x é qualquer coisa aí 😂 mas nesse caso vamos usar o Json.

## Usando o ajax para pegar informação do banco de dados e passar para o lado client com Ajax e json

Para importar o ajax para o seu código é simplesmente fazer uma *instancia da classe XMLHttpRequest*, isso vai criar uma variável ajax que tem alguns métodos, um deles é um método que pega informações do banco.

**(pausa para refazer o dicionário de js)**... *muito tempo depois*...

Mod 81 -- **08/11/21**

Voltando depois de algum tempo, exemplo:

~~~js
let ajax = new XMLHttpRequest();

// Instanciado o ajax, o ajax precisa entender o que eçe precisa fazer e onde. 
ajax.open('GET', '/users');

/* 
    Uma vez que você fez isso, você não sabe quanto tempo vai 
    precisar para o 
    ajax carregar as informações do banco, então precisamos 
    passar um evento 
    que vai dizer o que fazer quando ficar pronto, ou seja, 
    quando o ajax 
    ficar pronto, faça:
*/
ajax.onload = event => {

    /*
        Quando ficar pronto, ele vai retornar um objeto 
        responseText que é
        acessado simplesmente fazendo ajax.responseText, mas 
        ele é um objeto json em string então faz um parse para voltar como objeto json dessa forma:
    */
    let obj = JSON.parse(ajax.responseText);

    // E assim podemos fazer o que quisermos com o json
} 
~~~
