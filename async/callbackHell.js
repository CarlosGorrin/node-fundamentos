hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
};

hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log('Bla bla bla...');
        callbackHablar();
    }, 1000);
}

adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

conversacion = (nombre, veces, callback) => {
    if (veces >= 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// --

console.log('Iniciando proceso...');

hola('Carlos', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado');
    });
})

// hola('Carlos', (nombre) => {
//     hablar(() => {
//         adios(nombre, () => {
//             console.log('Terminando proceso...');
//         });
//     });
// });