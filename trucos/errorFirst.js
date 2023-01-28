asincrona = (callback) => {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}


asincrona((err, dato) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err; // NO VA A FUNCIONAR EL TRY - CATCH POR LA ASINCRONIA
    }

    console.log('Todo bien, mi dato es ', dato);
})