const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1>Hello</h1>')

});

module.exports = routes;