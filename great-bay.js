var inquirer = require("inquirer");

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