const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cargar rutas
const user_routes = require('./routes/user')

//Configuración BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras HTTP


//Rutas Base
app.use('/api', user_routes);

// app.get('/pruebas', (req, res) => {
//     res.status(200).send({message: 'Bienvenido a la APP Odonto'})
// })

module.exports = app;