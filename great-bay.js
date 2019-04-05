var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Tishie55",

    database: "great_bayDB"
});

connection.connect(function(err) {
    if (err) throw err;

    start();
  });
  