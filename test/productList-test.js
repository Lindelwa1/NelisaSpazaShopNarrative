var assert = require("assert");



describe("Find data in file", function(){
	var ProductList = require("../productList");


    it('should return a unique list of product in the file synchronously', function(){

        
        var productLines = ProductList.linesInFiles('./files/Nelisa Sales History.csv');
        assert.deepEqual(productLines, ["Milk 1l","Imasi","Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"]);

	});


     
    it("it should return the number of items sold", function(){
        var ProductsSold = require("../productsSold");

        var productNames = ProductsSold.productsSold("./files/Nelisa Sales History.csv");
        var itemsMap =  {'Milk 1l':142, 'Imasi':125, 'Bread':130, 'Chakalaka Can':94, 'Gold Dish Vegetable Curry Can':86, 'Fanta 500ml':94, 'Coke 500ml':159, 'Cream Soda 500ml':75, 'Iwisa Pap 5kg':47, 'Top Class Soy Mince':98, 'Shampoo 1 litre':26, 'Soap Bar':50, 'Bananas - loose': 114, 'Apples - loose':114, 'Mixed Sweets 5s':172, 'Heart Chocolates':20, 'Rose (plastic)': 14, 'Valentine Cards':14};
        assert.deepEqual(itemsMap,productNames);  
		

    });

     it('should return the most popular products', function(){
             var mostPopularproduct = require("../mostPopularProducts");

              var  mostpopular = mostPopularproduct.popularProduct("./files/Nelisa Sales History.csv");
              var result = {name:'Mixed Sweets 5s', amt:172};
              assert.deepEqual(result,mostpopular);


     });

});



    
