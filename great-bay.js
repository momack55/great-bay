
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Tishie55",

    database: "great_bayDB"
});

function post(){
    inquirer.prompt([
        {
            name: "item",
            message: "What is the items name?",
            type: "input"
        },
        {
            name: "bid",
            message: "what is the opening bid?",
            type: "intput"
        }
    ]).then(function(answers){
        var answers = answers;
        var query = connection.query("INSERT INTO auctions SET ?",{
            item_name: answers.item,
            category: "post",
            starting_bid: answers.bid,
            highest_bid: answers.bid,

        })
    })
    
}

  
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
            case "post": post()
            break;
        }
    })
}
ask();

// connection.connect(function(err) {
//     if (err) throw err;

//     start();
//   });
