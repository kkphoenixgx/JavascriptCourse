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