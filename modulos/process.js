process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Hey, el proceso acabo');
    // setTimeout(() => {
    //     console.log('Esto no se vera nunca');
    // }, 0)
});

process.on('uncaughtException', (err, origen) => {
    console.error('Se nos ha olvidado capturar un error');
    // console.error(err);
    setTimeout(() => {
        console.log('Esto viene de las excepciones');
    }, 0)
});

noExiste();

console.log('Esto si el error no se recoje, no sale');