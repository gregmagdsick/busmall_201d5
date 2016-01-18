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

Product.prototype.displayImage = function(imageLocationId) {
  var img = document.createElement('img');
  img.src = this.filePath;

  imageLocationId.appendChild(img);
}

var bag = new Product('Bag','img/bag.jpg');
var banana = new Product('Banana', 'img/banana.jpg');
var boots = new Product('Boots', 'img/banana.jpg');
var chair = new Product('Chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulu', 'img/cthulhu.jpg');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg');
var pen = new Product('Pen Silverware', 'img/pen.jpg');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg');
var shark = new Product('Shark Sleepig Bag', 'img/shark.jpg');
var sweep = new Product('Sweep', 'img/sweep.png');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Product('USB Tentacle', 'img/usb.gif');
var water_can = new Product('Watering Can', 'img/water-can.jpg');
var wine_glass = new Product('Wine Glass', 'img/wine-glass.jpg');

function randomImageDisplay() {
  var i = Math.ceil(Math.random() * (allProducts.length - 1));
  allProducts[i].displayImage();
}

function threeRandomProducts() {
  var i = Math.ceil(Math.random() * (allProducts.length - 1));
  var j = Math.ceil(Math.random() * (allProducts.length - 1));
  var k = Math.ceil(Math.random() * (allProducts.length - 1));
  var randomProductOne = allProducts[i];
  var randomProductTwo = allProducts[j];
  var randomProductThree = allProducts[k];

  while (randomProductOne === randomProductTwo) {
    j = Math.ceil(Math.random() * (allProducts.length - 1));
    randomProductTwo = allProducts[j];
  }

  while (randomProductTwo === randomProductThree) {
    k = Math.ceil(Math.random() * (allProducts.length - 1));
    randomProductThree = allProducts[k];
  }

  randomProductOne.displayImage(imageLocationOne);
  randomProductTwo.displayImage(imageLocationTwo);
  randomProductThree.displayImage(imageLocationThree);
}

threeRandomProducts();
