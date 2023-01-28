console.log('Algo');
console.error('Aja');
console.warn('Ojo');

var tabla = [
    { 
        a: 1,
        b: 'Primera'
    }, 
    { 
        a: 2,
        b: 'segunda'
    }
]

console.group('conver');
console.log('Hola');
console.log('Bla bla bla');
console.log('Chao');
console.groupEnd('conver');

console.table(tabla);

function1 = () => {
    console.group('function1');
    console.log('Sigo en la 1');
    console.log('donde estoy?');
    funcion2();
    console.groupEnd('function1');
    
}

funcion2 = () => {
    console.log('funcion2');
}

console.log('Arranco');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');


