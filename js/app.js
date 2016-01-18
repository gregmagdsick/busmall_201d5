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
  console.log(allProducts);
}

Product.prototype.displayImage = function() {
  var img = document.createElement('img');
  img.src = this.filePath;

  imageLocationOne.appendChild(img);
}

var bag = new Product('Bag','img/bag.jpg');
var banana = new Product('Banana', 'img/banana.jpg');
var boots = new Product('Boots', 'img/banana.jpg');
var chair = new Product('Chair', 'img/chair.jpg');
var cthulu = new Product('Cthulu', 'img/cthulu.jpg');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg');
var pen = new Product('Pen Silverware', 'img/pen.jpg');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg');
var shark = new Product('Shark Sleepig Bag', 'img/shark.jpg');
var sweep = new Product('Sweep', 'img/sweep.png');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Product('USB Tentacle', 'img/usb.jpg');
var water_can = new Product('Watering Can', 'img/water-can.jpg');
var wine_glass = new Product('Wine Glass', 'img/wine-glass.jpg');


bag.displayImage();
