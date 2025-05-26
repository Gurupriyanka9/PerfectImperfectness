import React, { useState } from 'react';
import { productsData } from '../../assets/data.js';

function Products({ addToCart }) {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div className="products-page">
      <div className="search-bar">
        <input 
          type="text" 
          onChange={handleSearch} 
          placeholder="Search for products..." 
        />
      </div>

      <section id="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <button onClick={() => handleCategory('acne')}>Acne Care</button>
          <button onClick={() => handleCategory('pores')}>Pore Cleansing</button>
          <button onClick={() => handleCategory('hydration')}>Hydration</button>
          <button onClick={() => handleCategory('collagen')}>Collagen Boost</button>
          <button onClick={() => handleCategory('sensitive')}>Sensitive Skin</button>
        </div>
      </section>

      <section id="products">
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;