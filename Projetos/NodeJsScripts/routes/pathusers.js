const NeDB = require('nedb');
var db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = app=>{

    var route = app.route('/users');

    route.get((req, res) => {

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

    route.post((req, res) => {

        db.insert(req.body, (error, user)=>{
            if(err){
                app.Utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
            }
        })
    });

    const routeId = app.routes('/users/:id');

    routeId.get((req, res) => {
        db.findOne({_id: req.params.id}).exec((err, user)=> {
            if(err){
                console.log(`error: ${err}`);
                res.statusCode(300).json({
                    error: err
                });
            }else{
                res.status(200).json(user);
            }
        }); 
    });
    
}