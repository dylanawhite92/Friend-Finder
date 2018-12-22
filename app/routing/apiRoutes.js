// Dependencies
var path = require("path");
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "friends_db"
});
}

connection.connect(function(err) {
    if (err) {
    console.error(`Error connecting: ${err.stack}`);
    //once successfully connected, you may want to query your database for the info you'll need later!
    }

    console.log(`Connected as ID: ${connection.threadId}`);
});

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        console.log(req);
        console.log(res);
    });

    app.post("/api/friends", function(req, res) {
        res.json(req.body);
    });
};