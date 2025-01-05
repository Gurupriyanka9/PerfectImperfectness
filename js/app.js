// DOM Elements
const productContainer = document.querySelector(".product-list");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll(".category-list button");

// Load products
function displayProducts(products) {
    productContainer.innerHTML = ""; // Clear the container
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Display all products initially
displayProducts(productsData);

// Category filtering
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const filteredProducts = productsData.filter(product => product.category === category);
        displayProducts(filteredProducts);
    });
});

// Search functionality
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
