const http = require('http');

let server = http.createServer((req, res) => {

    console.log('URL: ', req.url);
    console.log("Method: ", req.method);

    switch (req.url) {
        case '/':
            
            res.statusCode = 200;
            res.setHeader('content-type', 'text/html')
            res.end('<h1>Hello</h1>')

            break;
    
        case '/users':

            res.statusCode = 200;
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({
                users:[{
                    user: "Kauã Alves",
                    email : "macacodeoculos123@gmail.com",
                    id: 1
                }]}
            ));

            break;
    }
});

server.listen(3000, "127.0.0.1", ()=>{

    console.log("Servidor rodando");

});
