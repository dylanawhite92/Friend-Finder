// Dependencies
var express = require("express");
var path = require("path");

// Set up Express.js and set port
var app = express();
var PORT = process.env.port || 8080;

// Use express.static to serve static content for app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

// Listen on PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`)
});