const NeDB = require('nedb');
var db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = app=>{

    app.get('/users', (req, res) => {

        db.find({}).sort({nome : 1}).exec((err, user) => {
            if(err){
                app.Utils.error.send(err, req, res);
            }else{
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json')
                res.json({
                    users
                });
            }
        });

    });

    app.post('/users', (req, res) => {

        db.insert(req.body, (error, user)=>{
            if(err){
                console.log(error)
                res.status(400).json({
                    error: error
                });
            }else{
                res.status(200).json(user);
            }
        })
    });
    
}