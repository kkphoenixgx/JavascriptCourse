const NeDB = require('nedb');
var db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = app=>{

    app.get('/users', (req, res) => {

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