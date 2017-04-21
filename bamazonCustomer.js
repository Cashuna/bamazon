//==========================================Delcarations=====================================
var mysql = require("mysql"), inquirer = require("inquirer");
var a = require("./bamazonFunctions.js");

var connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: ,
    database: "bamazon_db"

});

var question = [
    {
        type: "input",
        name: "item",
        message: "Select the number of the product you'd like to buy.",
        default: "25"
    },
    {
        type: "input",
        name: "quantity",
        message: "Great, how many would you like?",
        default: "0"
        //write logic to reject entering 0 as a quantity and re-prompt the user.
    }
];

//==========================================Functions=========================================
//See imported file

//==========================================Connection and Queries============================
connection.connect(function(err){
    if (err){
        console.log("There was an error connecting, start your server.\nOr look here: " + err);
    }
});


connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    var objectHolder = JSON.stringify(res), productName = JSON.parse(objectHolder);
    if (err){
        console.log (err);
    }else {
        a.printProducts(productName);
        inquirer.prompt(question).then(function(input){
            a.checkStock(a.validateInput(res, input), input.item, input.quantity);
        });
    }
});

connection.end();
