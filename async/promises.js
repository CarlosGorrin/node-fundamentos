hola = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            // resolve(nombre);
            reject();
        }, 1500);
    });
};

hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
}

adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    })
    
}

console.log('Iniciando proceso...');

hola('Carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Proceso terminado');
    })
    .catch(error => {
        console.log('ERROR');
        console.log(error);
    })