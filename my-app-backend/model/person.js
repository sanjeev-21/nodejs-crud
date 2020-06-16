const mongoose = require("mongoose");
var Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');
const personSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});
personSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Person", personSchema)