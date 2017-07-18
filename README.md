# Bamazon

This is an Amazon-like storefront using MySQL a flavor of structured query languages available. The app will take in orders from customers and deplete stock from the store's inventory.

1. MySQL Database created.

2. A table inside of that database.

3. The table has five columns

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. A Node application runs this application to display all of the items available for sale.

6. The app prompts users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order,the application checks if your store has enough of the product to meet the customer's request and displays a log a phrase like `Insufficient quantity!` if there isn't enough to fill the demand, then prevent the order from going through.

8. If there is enough of the product, the customer's order is fulfilled.
   * Once the update goes through, show the customer the total cost of their purchase.
