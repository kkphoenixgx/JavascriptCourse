const express = require('express');
const router = express.Router();

const restify = request('restify-client');
const assert = request('assert');

// create a json client for restify
var client = restify.createJsonCLient({
    url: 'http//localhost:4000'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  client.get('/users', function(err, restifyReq, restReq, object){
    assert.ifError(err);
    res.end(JSON.stringify(object, null, 2))
  });

});

module.exports = router;
