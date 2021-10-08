const express = require('express');
const consign = require('consign');

var app = express();

consign().include('routes').into(app);


app.listen(3000, "127.0.0.1", ()=>{
    console.log("Servidor rodando");
});