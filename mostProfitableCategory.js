var fs = require("fs"); 

var categoryCalculations = require('./categoryCalculations');



var findMostProfitableCategory = function ( fileName){
	var categoryMap = categoryCalculations.getSalesPerCatergory(fileName);



	  var max = 0;
            for(var prop in categoryMap){
                var value = categoryMap[prop];
                    if(categoryMap[prop] > max){
                        max = categoryMap[prop];
                        mostProfitableCategory = {
                            productName: prop,
                            amt: max

                        };
                    };
            };
        	console.log(mostProfitableCategory);
    		return mostProfitableCategory;
        };

	 exports.getTotalCatergory = function(fileName){
        var mostProfitableCategory = findMostProfitableCategory(fileName);
        return mostProfitableCategory;
    };

