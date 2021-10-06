const express = require('express');

var app = express();

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1>Hello</h1>')

});

app.get('/users', (req, res) => {

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

app.listen(3000, "127.0.0.1", ()=>{

    console.log("Servidor rodando");

});
