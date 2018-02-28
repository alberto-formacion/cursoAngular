"use strict"

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TodoSchema   = new Schema({
    nombre:String, 
    terminado:Boolean, 
    importante:Boolean,
    color: String
});

module.exports = mongoose.model('Todo', TodoSchema);
