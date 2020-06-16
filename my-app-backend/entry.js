var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var app = express()
var cors = require('cors')
const route_product = require('./route/product')
const route_person = require('./route/person')
const router_file = require('./route/file')
mongoose.connect('mongodb://localhost/my_db')

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected at port 27017");
});
mongoose.connection.on("error", (err) => {
    console.log(err);
});
app.use(cors())
app.use(bodyparser.json()); //helps to parse json data in the request body
// app.use(app.router);
// routes.initialize(app);
app.use("/product", route_product)
app.use("/person", route_person)
app.use("/file", router_file)

app.listen(8081, () => {
    console.log("Server has been started from the port - " + 8081)
});