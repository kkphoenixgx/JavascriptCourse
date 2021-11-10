const express = require('express');
const assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();
  
// create a json client for restify
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  client.get('/users', function(err, restifyReq, restReq, object){
    assert.ifError(err);
    res.end(JSON.stringify(object, null, 2))
  });

});

module.exports = router;
