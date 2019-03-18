const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cargar rutas
const user_routes = require('./routes/user')
const doctor_routes = require('./routes/doctor')

//Configuración BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurar cabeceras HTTP


//Rutas Base
app.use('/api', user_routes);
app.use('/api', doctor_routes)
    // app.get('/pruebas', (req, res) => {
    //     res.status(200).send({message: 'Bienvenido a la APP Odonto'})
    // })

module.exports = app;