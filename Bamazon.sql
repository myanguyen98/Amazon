
--Required columns
----------------------------------------
/*item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)
*/

DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INTEGER(15) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR (50) NOT NULL,
	department_name VARCHAR(50) NULL,
	price DECIMAL(10,2)NULL,
	stock_quantity INTEGER(15)NULL,
	PRIMARY KEY (item_id);

);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Marvel Legends Captain America's Shield","Toys & Games",99.99,10);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Nas: Illmatic Vinyl Edition","Music",19.99,8);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("'Impact' Carbon Fiber Motorcycle Helmet","Motorcycle & Powersports",1676.30,12);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Nintendo Switch","Electronics & Gaming",370.95,3);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Huy Fong Sriracha 28 oz","Foods",2.39,32);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Breville Stainless Espresso Maker","Kitchen",169.99,40);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Tentsile Stingray Tent","Camping & Outdoors",580.33,23);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Boosted brand Electric Longboard","Outdoor Recreation",1499.00,33);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("14KW Sapphire Wedding Band","Jewelery",134.99,98);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("Hitachi Miter Saw","Power Tools",99.00,2);
