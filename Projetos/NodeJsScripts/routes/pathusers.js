const NeDB = require('nedb');
var db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = app => {
    
    const route = app.route('/users');
    const routeId = app.route('/users/:id');
    
    route.get((req, res) => {

        db.find({}).sort({nome : 1}).exec((err, users) => {
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
    route.post(
        [
            check("name", "O nome é obrigatório.").notEmpty(),
            check("email", "Email inválido.").notEmpty().isEmail(),
        ], (req, res) => {

            db.insert(req.body, (error, user)=>{
                if(err){
                    app.Utils.error.send(err, req, res);
                }else{
                    res.status(200).json(user);
                }
            });
        }
    );

    // -----------------Route Id----------------------

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
    routeId.put((req, res) => {
        db.update({_id: req.params.id}, req.body, err =>{
            if(err){
                console.log(`error: ${err}`);
                res.statusCode(300).json({
                    error: err
                });
            }else{
                res.status(200).json(Object.assign(req.params,req.body));
            }
        });
    });
    routeId.delete((req, res) =>{
        db.remove({_id: req.params.id}, {}, err=>{
            if(err){
                res.statusCode(300).json({
                    error: err
                });            }
            else{
                res.status(200).json(req.params);
            }
        })
})
}