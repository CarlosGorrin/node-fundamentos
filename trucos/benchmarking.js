console.time('todo');
let suma = 0;
console.time('bucle');
for ( let i = 0; i < 1000000; i++) {
    suma ++;
}

console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for ( let k = 0; k < 1000000; k++) {
    suma2 = suma2 + 1;
}

console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empieza el proceso asincrono');

asincrona = () => {
    return new Promise((resolver) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
        })
    })
}

asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');

