var inquirer = require("inquirer"), mysql = require("mysql");
var a = require("./bamazonFunctions"), Table = require("easy-table");


inquirer.prompt([{
    type: "list",
    name: "select",
    message: "Hello Manager, please select an option.",
    choices: ["View Products for Sale", "View Low Inventory", "This Option Crashes", "Not Complete"]
}]).then(function (response){
    switch(response.select) {
        case "View Products for Sale": {
            a.viewProduct();
            break;
        }
        case "View Low Inventory": {
            a.lowInventory();
            break;
        }
        case "This Option Crashes": {
            a.addInventory();
            break;
        }
        case "Not Complete": {
            console.log("Picked this option 4");
            break;
        }
        default:
    }
});