const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://odonto_master:yashiro69@cluster0-svm0m.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('La conexión a la base de datos esta corriendo correctamente...');
    }
})