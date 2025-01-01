// Fetch products from backend and render them dynamically
async function fetchProducts() {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      renderProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  // Render products to the DOM
  function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the product list
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const productImage = document.createElement('img');
      productImage.src = product.image_url;
      productImage.alt = product.name;
  
      const productTitle = document.createElement('h3');
      productTitle.textContent = product.name;
  
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${product.price}`;
  
      const productFoodTips = document.createElement('p');
      productFoodTips.textContent = `Food Tip: ${product.food_tips}`;
  
      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(productDescription);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productFoodTips);
  
      productList.appendChild(productDiv);
    });
  }
  
  // Search products by name
  document.getElementById('searchBar').addEventListener('input', async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      const filteredProducts = data.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
      renderProducts(filteredProducts);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  });
  
  // Initialize by fetching products
  fetchProducts();
  