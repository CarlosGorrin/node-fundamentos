const http = require('http');

router = (req, res) => {
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;

        default:
            res.write('Error 404: Ni idea');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' });
    // res.write('Hola, ya se usar http de NodeJS');

    // res.end();
}

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');