"use strict"

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AlumnoSchema   = new Schema({
    nombre:String,
    asignaturas: [{ type: Schema.ObjectId, ref: "Asignatura" }]
});

module.exports = mongoose.model('Alumno', AlumnoSchema);