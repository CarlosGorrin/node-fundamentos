const fs = require('fs');
const stream = require('stream');
// const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('UTF8');

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
// });

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transform = stream.Transform;


// no se entiende esto
// Mayus = () => {
//     Transform.call(this);
// }

// util.inherits(Mayus, Transform);

// Mayus._prototype._transform = (chunk, codif, cb) => {
//     chucnkMayus = chunk.toString(). toUpperCase();
//     this.push(chucnkMayus);
//     cb();
// }

class Mayus extends Transform {
    _transform(chunk, encoding, callback) {
        const chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        callback();
    }
}

const mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);