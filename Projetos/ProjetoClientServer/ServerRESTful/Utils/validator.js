module.exports = {

    /* 
        That just check if everything is correct with assert method
        from express and says if that is ok with true or false
    */

    validateUser:(app, req, res) =>{
        req.assert('nome', 'Você tem que colocar um nome cabaço');
        req.assert('email', 'o campo deve ser em formato de email');

        let errors = req.validationErrors();
        
        if(!errors) return true
        if(errors) app.utils.error.send(errors, req, res); return false
    }

};