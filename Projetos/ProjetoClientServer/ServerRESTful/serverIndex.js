const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
/*
 The Express Validator actually have been used on the path users.js file, that is new syntax of the ExpressValidator 
*/

var app = express();
app.use(bodyParser.urlencoded( { extended: false, limit: '50mb' } ));
app.use(bodyParser.json( { limit: '50mb' } ));

consign().include('routes').include('Utils').into(app);

app.listen(4000, "127.0.0.1", ()=>{
    console.log("Servidor rodando");
});