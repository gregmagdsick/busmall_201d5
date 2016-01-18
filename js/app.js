var imageLocationOne = document.getElementById('imageLocationOne');
var imageLocationTwo = document.getElementById('imageLocationTwo');
var imageLocationTwo = document.getElementById('imageLocationThree');

var allProducts = [];

//building object constructor
var Product = function(productName,filePath) {
  this.productName = productName;
  this.filePath = filePath;
  productShows = 0;
  productClicks = 0;
  allProducts.push(this);
}

Product.prototype.displayImage = function() {
  var img = document.createElement('img');
  img.src = this.filePath;

  imageLocationOne.appendChild(img);
}

var bag = new Product ('Bag','img/bag.jpg');
var banana = new Product('Banana', 'img/banana.jpg');
var boots = new Produt ('Boots', 'img/banana.jpg');
var chair = new
bag.displayImage();
