const  createServer  = require('http');
var express = require('express');
var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html')

})

app.post('/take', function(req, res){
    res.write(req.body.value);
    res.end()
})

app.listen(3000);