"use strict";

// importar los paquetes necesarios
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Alumno = require('./app/models/alumno');
var Asignatura = require('./app/models/asignatura');
var Schema       = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/colegio');

// configurar la app para poder usar bodyParser()
// esto permite obtener la informacion del body en las peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // puerto

// ROUTES de nuestra app
// =============================================================================
var router = express.Router();              // Obtener instancia de Router - http://expressjs.com/es/guide/using-middleware.html

// middleware para todas las peticiones
router.use(function (req, res, next) {
    // Dominio que queremos del que queremos permitir el acceso puede ser * para cualquiera
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Verbos HTTP que vamos a permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Cabeceras que vamos a permitir
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Para el uso de sesiones o cookies
    res.setHeader('Access-Control-Allow-Credentials', true);

    next(); // lo enviamos a la ruta, para que no se pare en este metodo
});

router.route('/alumnos')
    .get(function (req, res) {
        /*var asig = new Asignatura();

        asig.nombre = 'Matematicas';

        asig.save();

        var asig = new Asignatura();

        asig.nombre = 'Fisica';

        asig.save();

        var asig = new Asignatura();

        asig.nombre = 'Quimica';

        asig.save();*/

        /*var al = new Alumno();

        al.nombre = 'Alberto';
        al.asignaturas=['5aa970bc99f1e228f9c13396','5aa970bc99f1e228f9c13397'];

        al.save();*/

        Alumno.find(function (err, alumnos) {
            if (err) {
                res.send(err);
            }
            console.log(alumnos);
            res.json(alumnos);
        }).populate('asignaturas');
    });

// REGISTRAMOS LAS ROUTES -------------------------------
// añadimos el prefijo /api
app.use('/api', router);

// ARRANCAMOS EL SERVER
// =============================================================================
app.listen(3000);
console.log('Magic happens on port ' + port);