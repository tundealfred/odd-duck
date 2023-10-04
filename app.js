const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

//the click CONTROLLER!!!
let userClicks = 0;
let maxClicks = 25;

const allProducts = [];

//the Constructor
function Products(name, src, views, clicks) {
  this.name = name;
  // this.src = src;
  this.src = `./img/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;

  allProducts.push(this);
}

//Array of Products
if (localStorage.getItem("allProducts") === null) {
  new Products("Bag", 0, 0);
  new Products("Banana", 0, 0);
  new Products("Bathroom", 0, 0);
  new Products("Boots", 0, 0);
  new Products("Bubblegum", 0, 0);
  new Products("Chair", 0, 0);
  new Products("Cthulhu", 0, 0);
  new Products("Dog-duck", 0, 0);
  new Products("Dragon", 0, 0);
  new Products("Pen", 0, 0);
  new Products("Pet-sweep", 0, 0);
  new Products("Scissors", 0, 0);
  new Products("Sharks", 0, 0);
  new Products("Tauntaun", 0, 0);
  new Products("Unicorn", 0, 0);
  new Products("Water-can", 0, 0);
  new Products("Wine-glass", 0, 0);
} else {
  const allProductsLS = JSON.parse(localStorage.getItem("allProducts"));
  for (let i = 0; i < allProductsLS.length; i++) {
    new Products(
      allProductsLS[i].name,
      allProductsLS[i].src,
      allProductsLS[i].views,
      allProductsLS[i].clicks
    );
  }
}

//Random Picker!!!
function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

//Display 3 Images
function showProducts() {
  let image1Idx = getRandomIndex();
  let image2Idx = getRandomIndex();
  let image3Idx = getRandomIndex();

  while (
    image1Idx === image2Idx ||
    image2Idx === image3Idx ||
    image1Idx === image3Idx
  ) {
    image2Idx = getRandomIndex();
    image3Idx = getRandomIndex();
  }

  image1.src = allProducts[image1Idx].src;
  image2.src = allProducts[image2Idx].src;
  image3.src = allProducts[image3Idx].src;

  image1.alt = allProducts[image1Idx].name;
  image2.alt = allProducts[image2Idx].name;
  image3.alt = allProducts[image3Idx].name;

  allProducts[image1Idx].views++;
  allProducts[image2Idx].views++;
  allProducts[image3Idx].views++;
}

function handleProductClick(event) {
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    showChart();

    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    return; // end the function here and don't run the rest
  }
  userClicks++;

  let clickedProduct = event.target.alt;

  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
  showProducts();
}

image1.addEventListener("click", handleProductClick);
image2.addEventListener("click", handleProductClick);
image3.addEventListener("click", handleProductClick);

function showChart() {
  const ctx = document.getElementById("myChart");

  const productNames = allProducts.map((product) => product.name);
  const productViews = allProducts.map((product) => product.views);
  const productClicks = allProducts.map((product) => product.clicks);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: productNames,
      datasets: [
        {
          label: "Views",
          data: productViews,
          borderWidth: 1,
        },
        {
          label: "Clicks",
          data: productClicks,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

showProducts();

// //button
// function showResults() {
//   const results = document.getElementById("results");

//   for (let i = 0; i < allProducts.length; i++) {
//     const li = document.createElement("li");
//     const product = allProducts[i];
//     li.textContent = `${product.name} was viewed ${product.views} times, and clicked ${product.clicks} times`;
//     results.appendChild(li);
//   }
// }

// const displayResult = document.getElementById("viewResult");
// displayResult.addEventListener("click", showResults);
