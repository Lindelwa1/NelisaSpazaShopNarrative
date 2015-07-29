var fs  = require("fs"); 

var findFiles = function (fileName) {

    var productList = []; 
    var productMap = {};
    var productSold =[];

        var fileContent = fs.readFileSync(fileName, 'utf8'); 
        var products = fileContent.split("\r"); 
     
    products.forEach(function(product){ 
      
      var hold = product.split(";"); 
      var productName = hold[2];
      // console.log(product)
      if(productMap[productName] === undefined && productName != "stock item"){
        productMap[productName] =0;
        productList.push(productName); 
      }
      
    }); 
    
    return productList;

}
exports.linesInFiles = function(fileName){
  var productList = findFiles(fileName);
  return productList;
};

exports.linesInFilesAsync = function(fileName, callback) {
  var productList = findFiles(folderName);
  callback(null, productList);
};