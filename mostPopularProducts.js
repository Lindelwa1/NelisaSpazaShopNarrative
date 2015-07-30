var fs = require("fs"); 

var productsSold = require('./productsSold');

var findMostPopularProducts = function ( fileName) {

    var productsMap = productsSold.productsSold(fileName);

    var mostPopularProducts = {};
    var max = 0;

    for(var prop in productsMap){
        var value = productsMap[prop];
            if(productsMap[prop] > max){
                max = productsMap[prop];
                mostPopularProducts = {
                    name: prop,
                    amt: max
                    
                };
            };
    };

  
    console.log(mostPopularProducts);
    return mostPopularProducts;

};
           
  exports.popularProduct = function(fileName){
        var mostPopularProducts = findMostPopularProducts(fileName);
        return mostPopularProducts;
    };