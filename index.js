require('./config/config')

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/Odonto', { useNewUrlParser: true }, (err, res) => {
    //mongoose.connect('mongodb+srv://odonto_master:yashiro69@cluster0-svm0m.mongodb.net/KalDent?retryWrites=true', { useNewUrlParser: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('La conexión a la base de datos esta corriendo correctamente...');

        app.listen(process.env.PORT, () => {
            console.log(`Escuchando en el puerto: ${process.env.port}`);
        })
    }
})