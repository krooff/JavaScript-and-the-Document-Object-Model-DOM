// Array of products
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
  ];
  
  // Function to display products
  function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous content
  
    products.forEach(product => {
      let productItem = `
        <div class="product">
          <h2>${product.name}</h2>
          <p>Price: $${product.price}</p>
          <p>${product.description}</p>
        </div>`;
      productList.innerHTML += productItem;
    });
  }
  
  // Trigger display when the page loads
  window.addEventListener("load", displayProducts);
  