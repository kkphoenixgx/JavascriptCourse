const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
/*
 The Express Validator actually have been used on the pathusers.js file, that is new syntax of the ExpressValidator 
*/

var app = express();
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());


consign().include('routes').include('Utils').into(app);


app.listen(3000, "127.0.0.1", ()=>{
    console.log("Servidor rodando");
});