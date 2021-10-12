mod 68                                            07/10/21

- Separando rotas do arquivo principal

   O que é contra producente em fazer um site com um
backend desse jeito que foi feito até agora é que esse
arquivo index ficaria muito gigantesco para fazer
manutenção e adicionar features, então é interessante 
separar os paths em files diferentes, separando os
arquivos para melhor produtividade e manutenção, fazendo
o index.js virar realmente só o index desse arquivo.

   Usando o Express no nodejs, a forma de trabalhar com rotas 
fica imensamente mais facil, no no express usando o
require(x) é possivel passar o x como o path de um arquivo, 
requisitando o arquivo x como um dependente.

   No arquivo passado no path, para que o express funcione,
é necessário passar um método y.Router(), sendo y o módulo 
express importado num require, que substituindo o "app." para 
a rota, você ganha uma série de funcionalidades a sua
disposição, uma delas é usar esse router como o antigo ".app"
e exportando para o index como dito antes e usando ele com um
app.use(x), sendo x uma variável que tem o require do arquivo,
você poderá separar as rotas em diferentes arquivos.

uma forma interessante de usar esses paths de uma forma mais
ágil é transformando o path daquele route como padrão no users
adicionando simplesmente a rota padrão na frente do app.use, 
fazendo isso, o get da rota padrão vai se tornar somente '/'
e os demais seguindo a lógica '/x' sendo x  a pasta nova.

exemplo para tirar toda essa complexidade:

* index:
    const express = require('express');
    const routesIndex = require('./routes/pathIndex')
    const routeUsers = require('./routes/pathUsers')
    
    var app = express();
    app.use(routesIndex);
    app.use('/users', routeUsers);
    
    app.listen(3000, "127.0.0.1", ()=>{
        console.log("Servidor rodando");
    });

* pathUsers:
    const express = require('express')
    const routes = express.Router()
    
    routes.get('/users', (req, res) => {
    
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json')
        res.json({
            users:[{
                user: "Kauã Alves",
                email : "macacodeoculos123@gmail.com",
                id: 1
            }]
        });
    
    });
    
    routes.get('/users/admin', (req, res) => {
    
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json')
        res.json({
            users:[]
        });
    
    });
    
    module.exports = routes;
