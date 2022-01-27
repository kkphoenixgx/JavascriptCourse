var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res)=>{

  let form = new formidable.IncomingForm({
    uploadDir : './uploads',
    keepExtensions: true
  });

  form.parse(req, (error, fields, files) =>{
      res.json({
        files
      });
  });
});

router.get('/file', (req, res) => {

  let filepath = req.query.path

  if(fs.existsSync(filepath)){
    fs.readFile(filepath, (err, data) =>{
      if(err){
        console.error(err)
        res.status(400).json( {error: err} );
      }
      else{
        res.status(200).end(data);
      }
    })
  }
})

router.delete('/file', (req, res)=>{
  
  let form = new formidable.IncomingForm({
    uploadDir : './uploads',
    keepExtensionsFiles: true
  });

  form.parse(req, (error, fields, files) =>{

    if(fs.existsSync(fields.path)){
      fs.unlink(fields.path, error => { 
        
        if(error){
          res.status(400).json();
        }else{
          res.json({ fields })
        }
      });
    }
  })
})

module.exports = router;
