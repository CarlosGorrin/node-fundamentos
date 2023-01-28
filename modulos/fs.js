const fs = require('fs');

leer = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

escribir = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No se puede por aca', err)
        } else {
            console.log('OK OK');
        }
    });
}

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
}

// leer(__dirname + '/archivo.txt', console.log);

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevoooo', console.log);

borrar(__dirname + '/archivo1.txt', console.log);
