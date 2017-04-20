//bamazonFunction.js

var mysql = require("mysql");
//export.connection = connection;

module.exports = {
    connection: mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: ,
        database: "bamazon_db"

    }),
    checkStock: function (item, quantity){
        this.connection.query("SELECT stock_qty, price, product_name FROM products" , function (err, stock_res) {
            if (err){
                console.log("This is the error: "+err);
                this.connection.end();
            }
            else{
                var holder = JSON.stringify(stock_res),  price = JSON.parse(holder), index = item - 1;
                var total = price[index].price * quantity;
                if (quantity === undefined){
                    console.log("You must enter a quantity.");
                }
                else if (price[index].stock_qty < quantity) {
                    console.log("%s is on back order, it will be available tomorrow.", price[index].product_name);
                }
                else{
                    console.log(price[index].product_name + " available. Price per unit is: $"+ price[index].price +"\n\nHere's your quote: $"+total);
                }
            }
        });
        this.connection.end();
    },

    validateInput: function (res, input){
        var responseHolder = JSON.stringify(res), name = JSON.parse(responseHolder), index = input.item - 1;

        if (input.item > name.length){
            console.log("\nThat item is not listed. Please check the item ID.\n");
        }//how do you interrupt the else statement at this point as the table does not have item, input 25 gets here and the next function runs causing a price = undefined error.
        else {
            console.log("\nChecking for " + input.quantity + " units of the " + name[index].product_name + "...\n");
        }
    },

    printProducts: function (product){
        var stringifiedResponse = JSON.stringify(product), parsedResponse = JSON.parse(stringifiedResponse);

        console.log("\n------Here's the Products---------");
        for (var i = 0; i<product.length; i++){
            console.log(parsedResponse[i].item_id +". "+parsedResponse[i].product_name +", $"+ parsedResponse[i].price);
        }
        console.log("\n----------End of the List---------");
    }
};
