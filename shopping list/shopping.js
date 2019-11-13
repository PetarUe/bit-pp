
function Product(productID, name, price, expirationDate) {
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expirationDate);
}
Product.prototype.getInfo = function () {
    return this.name[0] + this.name[this.name.length - 1] + this.productID + ", " + this.name + ", " + this.price + "rsd";

}

var banana = new Product(12548, "Banana", 104, "10.12.2021.");
var mandarina = new Product(15789, "Mandarin", 154, "10.12.2021.");

/*  console.log(banana.getInfo());
 */


function ShoppingBag() {
    this.productList = [];
    this.average = 0;
    this.mostExpensive = 0;
}
ShoppingBag.prototype.addProduct = function (product) {
    var today = new Date();
    if (product.expirationDate > today) {
        this.productList.push(product);
    }
}
ShoppingBag.prototype.addAverage = function () {
    var result = 0;
    for (var i = 0; i < this.productList.length; i++) {
        result += this.productList[i].price
    }
    this.average = result / this.productList.length;
}
ShoppingBag.prototype.mostExpensive = function (product) {
    var priceArray = [];
    for (var i = 0; i < this.productList.length; i++) {
        priceArray[priceArray.length] = this.productList[i].price;
    }
    return Math.max(priceArray);
}









}) ()