var fs = require("fs"); 

var findMostPopularProduct = function ( fileName) {
    var productsMap = {};
    var quantitySold = [];
    var mostPopularProducts = {};

         // body...

    var fileContent = fs.readFileSync(fileName, "utf8");
    var products = fileContent.split("\r");
         
         // remove the first line from the list
        products = products.splice(1);

        products.forEach( function (product) {
          
             var productColumns = product.split(";");
             var productName = productColumns[2];
             var quantity = Number(productColumns[3]);

             if (productsMap[productName] === undefined ) {
                 quantitySold.push(productName);
                 productsMap[productName] = 0;   
             }

             productsMap[productName] += quantity;

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
        
        });
      
         
          console.log(mostPopularProducts);
          return mostPopularProducts;

};
           
  exports.popularProduct = function(fileName){
        var mostPopularProducts = findMostPopularProduct(fileName);
        return mostPopularProducts;
    };