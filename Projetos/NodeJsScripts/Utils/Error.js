module.exports = {

    send: (err, req, res, statusCode = 400) =>{
        console.log(`error: ${err}`);
        res.statusCode(statusCode).json({
            error: err
        });
    }
}