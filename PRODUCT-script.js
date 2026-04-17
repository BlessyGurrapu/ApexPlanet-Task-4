let products = [
  { name: "Phone", price: 1000 },
  { name: "Shoes", price: 400 },
  { name: "Watch", price: 700 }
];

function displayProducts(data) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

function filterProducts(type) {
  let filtered = products;

  if (type === "low") {
    filtered = products.filter(p => p.price < 500);
  } else if (type === "high") {
    filtered = products.filter(p => p.price >= 500);
  }

  displayProducts(filtered);
}

function sortProducts() {
  products.sort((a, b) => a.price - b.price);
  displayProducts(products);
}

displayProducts(products);
