mod 73 <br>
**13/10/21**

<h2>Chamando métodos de utilidade com consign( ) no nodeJs</h2>

   Lendo o código você já percebe que tem coisas de errado
nele que são facilmente encontradas, um desses erros é justamente ter várias vezes o mesmo trecho de código citado, então esses trechos são facilmente mudados, simplesmente criado métodos, a forma que se tem em node de criar métodos com o consign é bem fácil, você só precisa de uma pasta que você vai guardar os métodos uteis do seu código e chamar ele no consign, vamos ver isso na prática:

Primeiro crie a pasta de arquivos úteis e crie arquivos que vão ser os metodos exportaveis:

<br>
<img src="../img/Screenshot (166).png" alt="Screenshot"/>
<br><br>

Depois podemos criar o arquivo do método, que por curiosidade dos fãs não é um método de fato mas whatever a vida triste e a gente só aceita, a gente basicamente exporta uma função como um módulo pelo consign que fica tudo mais fácil e melhor

então primeiro cria o método e exporta ele no arquivo, no caso o error.js, como fazemos isso? bem simples, vamos exportar ele com o consign mesmo, então vamos fazer um module.exports = {o que você quer exportar em json} então vamos criar uma função em json para exportar e para quem era leigo nisso como eu, é simplesmente colocar o nome da função, : e depois uma arrow function com a função, exemplo de uma função de erro:     

~~~javascript
module.exports = {
   send: (error, res, req, status code) => {
      console.log(`error: ${err}`);
        res.statusCode(statusCode).json({
            error: err
      });
   }
}
~~~

E para chamar esse método no arquivo index, também é bem simples, é só falar para o consign ler a pasta e tudo fica bem legal e bonito.

~~~javascript
const express = require('express');
const consign = require('consign');
//chamando o express e o consign

var app = express();
//criando o express

consign().include('Utils').into(app);

//chamando o consign (╯°□°）╯︵ ┻━┻
~~~

E para chamar o método tá ai a formulazinha:

>app.Utils.error.send( )<br><br> Sendo app a variável do express, Utils o nome da pasta, error o nome do arquivo e send( ) o nome do método passando as informações necessárias para rodar. 


Tudo bem simples mesmo e bem legal de se fazer com o consign, é o facilitador de todo programador. 

><img src="https://i.pinimg.com/originals/99/5a/d5/995ad537dcb285d682b39c0777e9b640.gif"  alt= "nice"/>


