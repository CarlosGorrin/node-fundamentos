// import bcrypt from './bcrypt.js';
const bcrypt = require('bcrypt')

const password = '1234Segura!';

bcrypt.hash(password, 5, (error, hash) => {
    console.log(hash);
});

// export default bcrypt;

// package.json
// "type": "module",