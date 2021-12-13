var express = require('express');
var router = express.Router();
var formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function( req, res ) {
  res.json(req.body);

  let formidable = new formidable.IncomingForm()
})

module.exports = router;
