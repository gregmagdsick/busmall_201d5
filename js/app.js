'use strict';
var imageLocationOne = document.getElementById('imageLocationOne');
var imageLocationTwo = document.getElementById('imageLocationTwo');
var imageLocationThree = document.getElementById('imageLocationThree');
var buttonLocation = document.getElementById('results');
var chartContainer = document.getElementById('chart');

var allProducts = [];
var chartLabels = [];
var clickPercents = [];
var totalClicks = 0;

//building object constructor
var Product = function(productName,filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.productShows = 0;
  this.productClicks = 0;
  this.clickPercentage = 0;
  allProducts.push(this);
  chartLabels.push(this.productName);
}

Product.prototype.displayImage = function(imageLocationId) {
  var img = document.createElement('img');
  img.src = this.filePath;
  imageLocationId.appendChild(img);
}

var bag = new Product('R2 Bag','img/bag.jpg');
var banana = new Product('Banana Slicer', 'img/banana.jpg');
var boots = new Product('Boots', 'img/boots.jpg');
var chair = new Product('Chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulu', 'img/cthulhu.jpg');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg');
var pen = new Product('Pen Silverware', 'img/pen.jpg');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg');
var shark = new Product('Shark Sleepig Bag', 'img/shark.jpg');
var sweep = new Product('Baby Sweeper', 'img/sweep.png');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Product('USB Tentacle', 'img/usb.gif');
var water_can = new Product('Watering Can', 'img/water-can.jpg');
var wine_glass = new Product('Wine Glass', 'img/wine-glass.jpg');

function threeRandomProducts() {
  var i = Math.floor(Math.random() * (allProducts.length));
  var j = Math.floor(Math.random() * (allProducts.length));
  console.log(j);
  var k = Math.floor(Math.random() * (allProducts.length));
  var randomProductOne = allProducts[i];
  var randomProductTwo = allProducts[j];
  var randomProductThree = allProducts[k];

  while (i === j) {
    j = Math.floor(Math.random() * (allProducts.length));
    console.log(j);
    randomProductTwo = allProducts[j];
  }

  while (j === k || i === k) {
    k = Math.floor(Math.random() * (allProducts.length));
    console.log(k);
    randomProductThree = allProducts[k];
  }

  randomProductOne.displayImage(imageLocationOne, randomProductOne);
  randomProductTwo.displayImage(imageLocationTwo, randomProductTwo);
  randomProductThree.displayImage(imageLocationThree, randomProductThree);
  return [i,j,k]
}

function addResultsButton() {
  if (totalClicks > 2) {
    var buttonId = document.getElementById('results');
    buttonId.removeAttribute('hidden');
  }
}

function calcClickPercents() {
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].productShows > 0) {
      clickPercents[i] = ((allProducts[i].productClicks / allProducts[i].productShows) * 100).toFixed(2);
    } else {
      clickPercents[i] = 0;
    }
  }
  return clickPercents
}

//Inital population of the page
var displayedProducts = threeRandomProducts();

function handleClickOnLeft (event) {
  console.log(event);
  event.preventDefault();
  allProducts[displayedProducts[0]].productShows += 1;
  allProducts[displayedProducts[1]].productShows += 1;
  allProducts[displayedProducts[2]].productShows += 1;
  totalClicks += 1;
  // console.log('total clicks: ' + totalClicks);
  allProducts[displayedProducts[0]].productClicks += 1;
  // console.log(allProducts[displayedProducts[0]]);
  imageLocationOne.innerHTML = ' ';
  imageLocationTwo.innerHTML = ' ';
  imageLocationThree.innerHTML = ' ';
  addResultsButton()
  displayedProducts = threeRandomProducts();
}

function handleClickOnCenter (event) {
  console.log(event);
  event.preventDefault();
  allProducts[displayedProducts[0]].productShows += 1;
  allProducts[displayedProducts[1]].productShows += 1;
  allProducts[displayedProducts[2]].productShows += 1;
  totalClicks += 1;
  allProducts[displayedProducts[1]].productClicks += 1;
  imageLocationOne.innerHTML = ' ';
  imageLocationTwo.innerHTML = ' ';
  imageLocationThree.innerHTML = ' ';
  addResultsButton()
  displayedProducts = threeRandomProducts();
}

function handleClickOnRight (event) {
  console.log(event);
  event.preventDefault();
  allProducts[displayedProducts[0]].productShows += 1;
  allProducts[displayedProducts[1]].productShows += 1;
  allProducts[displayedProducts[2]].productShows += 1;
  totalClicks += 1;
  allProducts[displayedProducts[2]].productClicks += 1;
  imageLocationOne.innerHTML = ' ';
  imageLocationTwo.innerHTML = ' ';
  imageLocationThree.innerHTML = ' ';
  addResultsButton()
  displayedProducts = threeRandomProducts();
}

function handleClickOnButton(event) {
  var clickPercents = calcClickPercents();
  var data = {
    labels : chartLabels,
    datasets : [
      {
        label : 'Click Percentages',
        fillColor : "#FF0000",
        StrokeColor : "#7E7E7E",
        highlightFill : "#C5C5C5",
        highlightStroke : "#7E7E7E",
        data : clickPercents
      }
    ]
  };
  chartContainer.innerHTML = ' ';
  chartContainer.innerHTML = '<h3>Click Percentages by Item</h3> <canvas id="barChart" width= "600" height="400"></canvas>'
  var chartId = document.getElementById('barChart').getContext('2d');
  new Chart(chartId).Bar(data);
};

imageLocationOne.addEventListener('click', handleClickOnLeft);
imageLocationTwo.addEventListener('click', handleClickOnCenter);
imageLocationThree.addEventListener('click', handleClickOnRight);
buttonLocation.addEventListener('click', handleClickOnButton)
