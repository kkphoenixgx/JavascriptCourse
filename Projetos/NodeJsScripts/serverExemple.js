const http = require('http');
// importando o modulo para a const http

let server = http.createServer((req, res) => {

    console.log('URL: ', req.url);
    console.log("Method: ", req.method);

    req.end("ok")
});

/*
    criando o servidor e dizendo o que ele precisa fazer 
    ao iniciar o servidor
*/

server.listen(3000, "127.0.0.1", ()=>{

    console.log("Servidor rodando");

});

/* dizendo onde o servidor precisa escutar */