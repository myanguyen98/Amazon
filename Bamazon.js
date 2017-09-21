var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

		host:"localhost",
		port:3306,
		user:"root",
		password:"password",
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

  	inquirer
  		.prompt(
	  		{
	  			name:"productSelect",
	  			type:"input",
	  			message:"Please enter the item id of the product you would like to purchase."
	  		},
	  		{
	  			name:"quantity",
	  			type:"input",
	  			message:"How many items would you like to purchase?"
	  		},
	  		{
	  			name:"confirm",
	  			type:"list",
	  			choices:["Confirm","Cancel"],
	  			message:"Please confirm your purchase."
	  		}
  		)

  	.then (function(inquirerResponse){
  			var id = inquirerResponse.productSelect;
  			var prodInfo = "SELECT item_id, product_name, price FROM bamazon.products WHERE item_id=?";
  				connection.query(prodInfo, [id], function(err,res,fields){
  					for (var i = 0; i < res.length; i++) {
  						console.log("Item ID: " + res[i].item_id + "\nItem: " + res[i].product_name + "\nPrice: $" + res[i].price)
  					}
  				})
  
		});

		/*inquirer
			.prompt({
				name:"confirm",
				type:"input",
				message:"How many items would you like to purchase?"
			})

		.then(function(inquirerResponse){

		})*/

  };


/*.then(function(answer) {
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        runSearch();
      });
    });
*/