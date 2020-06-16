const mongoose = require("mongoose");
var Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');
const productSchema = new Schema({
    itemName: {
        type:"string",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    quantity: {
        type: "Number",
        required: true
    },
    sellerName: {
        type: "string",
        required: true
    }
});
productSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Product", productSchema)