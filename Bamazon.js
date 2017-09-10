var mysql = require("mysql");

var connection = mysql.createConnection({

		host:"localhost",
		port:3306,
		user:"root",
		password:"root",
		database:"bamazon"
});

connection.connect(function (err,res) {
	if (err) throw err;
	//console.log("connected as id " + connection.threadId);
	showProducts();

}); 

function showProducts() {
  connection.query("SELECT * FROM products" , function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price 
      	+ "\n------------------------------------------------------------");
    };
    
  });
  
};

