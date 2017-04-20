CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (60) NOT NULL,
department_name VARCHAR (20),
price DECIMAL(6, 2) NOT NULL,
stock_qty INT(15) NOT NULL,

PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("baseball caps", "sports", 8.50, 3000);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("galaxy boosters", "shoes", 189.53, 300);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("road signs", "consignment", 284.57, 123);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("its your hair", "shampoo", 48.35, 739);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("gas ranges", "stoves", 78.90, 430);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("dress socks", "clothes", 88.15, 733);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("pen 34-pack", "offices", 583.52, 63);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("food storage sets", "containers", 81.25, 30);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("calculator", "electronics", 8999.59, 3);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("pillows", "bedding", 138.45, 300);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("tape", "packaging", 138.45, 300);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("box", "packaging", 38.45, 300);