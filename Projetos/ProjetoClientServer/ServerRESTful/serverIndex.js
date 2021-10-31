const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

var app = express();
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('Utils').into(app);


app.listen(4000, "127.0.0.1", ()=>{
    console.log("Servidor rodando");
});