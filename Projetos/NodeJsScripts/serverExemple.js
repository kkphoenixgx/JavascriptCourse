const express = require('express');
const routesIndex = require('./routes/pathIndex')
const routeUsers = require('./routes/pathUsers')

var app = express();
app.use(routesIndex);
app.use('/users', routeUsers);

app.listen(3000, "127.0.0.1", ()=>{
    console.log("Servidor rodando");
});