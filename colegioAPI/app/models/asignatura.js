"use strict"

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AsignaturaSchema   = new Schema({
    nombre:String
});

module.exports = mongoose.model('Asignatura', AsignaturaSchema);