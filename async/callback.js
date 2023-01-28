hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
};

adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}
console.log('Iniciando proceso...');

hola('Carlos', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso...');
    });
});