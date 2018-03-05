"use strict";

// importar los paquetes necesarios
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('./app/models/todo');

mongoose.connect('mongodb://localhost:27017/todos');

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

router.route('/todos')
    .post(function (req, res) {
        var todo = new Todo();      // nueva instancia de Todo model

        todo.nombre = req.body.nombre;
        todo.terminado = req.body.terminado;
        todo.importante = req.body.importante;
        todo.color = req.body.color;

        todo.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Todo created!' });
        });
    })
    .get(function (req, res) {
        Todo.find(function (err, todos) {
            if (err) {
                res.send(err);
            }
            console.log(todos);
            res.json(todos);
        });
    });

router.route('/todos/:idTodo')
    .get(function (req, res) {
        Todo.findById(req.params.idTodo, function (err, todo) {
            if (err)
                res.send(err);
            res.json(todo);
        });
    })
    .put(function (req, res) {
        Todo.findById(req.params.idTodo, function (err, todo) {

            if (err)
                res.send(err);

            todo.nombre = req.body.nombre;
            todo.terminado = req.body.terminado;
            todo.importante = req.body.importante;
            todo.color = req.body.color;

            // save the todo
            todo.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Todo updated!' });
            });

        });
    })
    .delete(function (req, res) {
        Todo.remove({
            _id: req.params.idTodo
        }, function (err, todo) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// REGISTRAMOS LAS ROUTES -------------------------------
// añadimos el prefijo /api
app.use('/api', router);

// ARRANCAMOS EL SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);