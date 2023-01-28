const seRompe = (z) => {
    return console.log(3 + z);
}

try {
    seRompe(7);
} catch(err) {
    console.error('Vaya, algo se rompio aqui...');
    console.error(err.message);
}
