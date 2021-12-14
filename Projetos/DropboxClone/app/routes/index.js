var express = require('express');
var router = express.Router();
var formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', function(req, res){

  let form = new formidable.IncomingForm({
      uploadDir : './uploads',
      keepExtensionsFiles: true
  });

  form.parse(FormReq, (error, fields, files) =>{
      res.json({
        files
      });
  });
});

module.exports = router;
