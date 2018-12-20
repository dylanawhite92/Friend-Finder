// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

// Set port for app
var PORT = process.env.port || 8080;

// Exposes public directory
app.use(express.static(path.join(__dirname, "./app/public")));

// Parses incoming requests 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// Routes
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

// Listen on PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`)
});