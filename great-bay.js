
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "h0usTon1",

    database: "great_bayDB"
});
   

function post(){
     connection.connect(function(err) {
        if (err) throw err;
    
        // start();
      });

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

function bid(){
    var query = connection.query("SELECT * FROM auctions", function(err, res){
        for(var i = 0; i < res.length; i++){
        console.log("ID: " + res[i].id + " | " + "ITEM: " + res[i].item_name + " | " + "CURRENT BID: " + res[i].highest_bid + " | ")
        }
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
            case 'bid': bid()
            break;
            case "post": post()
            break;
        }
    })
}
ask();


