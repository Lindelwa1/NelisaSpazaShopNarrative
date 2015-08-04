var fs = require("fs"); 

var productsSold = require('./productsSold');

var findcategoryCalculations = function ( fileName){
   

    var getCatergories = {
    	'Milk 1l':'Dairy',
		'Imasi':'Dairy', 
		'Bread':'Starch',
		'Chakalaka Can': 'Tin Food', 
		'Gold Dish Vegetable Curry Can': 'Tin Food',
		'Fanta 500ml':'Soft Drinks', 
		'Coke 500ml':'Soft Drinks', 
		'Cream Soda 500ml':'Soft Drinks', 
		'Iwisa Pap 5kg':'Starch', 
		'Top Class Soy Mince': 'Starch', 
		'Shampoo 1 litre':'Toiletries', 
		'Soap Bar':'Toiletries', 
		'Bananas - loose': 'Fruits',
		'Apples - loose':'Fruits', 
		'Mixed Sweets 5s':'Candies', 
		'Heart Chocolates':'Candies', 
		'Rose (plastic)': 'Gifts',
		'Valentine Cards':'Gifts'
	}
   var productsMap = productsSold.productsSold(fileName);
   var categoryMap = {};
   	
    for(var productName in productsMap){
    	var catergoryName = getCatergories[productName];
    	var quantity = productsMap[productName];

    	if(categoryMap[catergoryName] === undefined){
    		categoryMap[catergoryName] = 0;

    	};
    	categoryMap[catergoryName] = categoryMap[catergoryName] + quantity;
  
   
	};
	console.log(categoryMap);
    return categoryMap;
};
           
  exports.getSalesPerCatergory = function(fileName){
        var categoryCalculations = findcategoryCalculations(fileName);
        return categoryCalculations;
    };
