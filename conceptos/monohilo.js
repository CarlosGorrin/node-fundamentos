console.log('Hola mundo');

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    if ( i === 5) {
        console.log('LLEGAMOS');
    }

}, 1000);

console.log('Segunda instruccion');