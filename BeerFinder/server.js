var express = require('express');
var mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
    connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "baconandeggs",
    database: "beers_db"
});
};

var app = express();

var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

});

module.exports = connection;

app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT);
});