let imageContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

function Products(name, src) {
  this.name = name;
  this.src = src;
  this.view = 0;
  this.clicks = 0;
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function showProducts() {
  let image1Index = getRandomIndex();
  let image2Index = getRandomIndex();
  let image3Index = getRandomIndex();

  while (
    image1Index === image2Index ||
    image2Index === image3Index ||
    image1Index === image3Index
  ) {
    image2Index = getRandomIndex;
    image3Index = getRandomIndex;
  }

  image1.src = allProducts[image1Index].src;
  image2.src = allProducts[image2Index].src;
  image3.src = allProducts[image3Index].src;

  image1.alt = allProducts[image1Index].name;
  image2.alt = allProducts[image2Index].name;
  image3.alt = allProducts[image3Index].name;

  allProducts[image1Index].view++;
  allProducts[image2Index].view++;
  allProducts[image3Index].view++;
}

function handleProductClick(event) {
  let clickedProduct = event.target.alt;

  if (event.target === imageContainer) {
    alert("Please Click on an image");
  } else {
    showProducts();
  }

  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
}

const allProducts = [
  new Products("Bag", "./img/bag.jpg"),
  new Products("Banana", "./img/banana.jpg"),
  new Products("Bathroom", "./img/bathroom.jpg"),
  new Products("Boots", "./img/boots.jpg"),
  new Products("Bubblegum", "./img/bubblegum.jpg"),
  new Products("Chair", "./img/bubblegum.jpg"),
  new Products("Cthulhu", "./img/cthulhu.jpg"),
  new Products("Dog-duck", "./img/dog-duck.jpg"),
  new Products("Dragon", "./img/dog-duck.jpg"),
  new Products("Pen", "./img/pen.jpg"),
  new Products("Pet-sweep", "./img/pet-sweep.jpg"),
  new Products("Scissors", "./img/scissors.jpg"),
  new Products("Sharks", "./img/shark.jpg"),
  new Products("Sweep", "./img/sweep.png"),
  new Products("Tauntaun", "./img/tauntaun.jpg"),
  new Products("Unicorn", "./img/unicorn.jpg"),
  new Products("Water-can", "./img/water-can.jpg"),
  new Products("Wine-glass", "./img/wine-glass.jpg"),
];

imageContainer.addEventListener("click", handleProductClick);

showProducts();
