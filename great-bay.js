
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
  
  var ask = function(){
    inquirer.prompt([
        {
           name: "action",
           message: "Would you like to bid or post?",
           type: "list",
           choices:  ["bid","post"]
        }
    
    ])
    .then(function(answers){
        var answers = answers.action;

        switch(answers){
            case 'bid': console.log("bidding now")
            break;
            case "post": console.log("posting now")
            break;
        }
    })
}
ask();
