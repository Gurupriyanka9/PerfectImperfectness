import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { productsData } from './assets/data';
import './css/styles.css';

function App() {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

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

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Removed from cart!');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success('Payment successful! Thank you for shopping with us.');
    setCart([]);
    setShowPayment(false);
  };

  const totalAmount = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace('Rs.', ''));
    return sum + price;
  }, 0);

  return (
    <div>
      <Toaster position="top-right" />
      <header>
        <img src="log.png" alt="Perfect Imperfectness Logo" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
        <h1>Perfect Imperfectness</h1>
        <h3>Embrace Your Glow: Perfectly Imperfect, Authentically You</h3>
        <input type="text" onChange={handleSearch} placeholder="Search for products..." />
        <button 
          onClick={() => setShowCart(true)}
          style={{ 
            marginLeft: '10px', 
            padding: '10px 20px',
            backgroundColor: '#7a4fa0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Cart ({cart.length})
        </button>
      </header>

      <main>
        {showCart && (
          <div className="cart-modal">
            <div className="cart-content">
              <h2>Shopping Cart</h2>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: Rs.{totalAmount}</h3>
                <button onClick={() => {
                  if (cart.length > 0) {
                    setShowPayment(true);
                    setShowCart(false);
                  } else {
                    toast.error('Cart is empty!');
                  }
                }}>Proceed to Payment</button>
                <button onClick={() => setShowCart(false)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {showPayment && (
          <div className="payment-modal">
            <div className="payment-content">
              <h2>Payment Details</h2>
              <form onSubmit={handlePayment}>
                <input type="text" placeholder="Card Number" required />
                <input type="text" placeholder="Card Holder Name" required />
                <div className="card-details">
                  <input type="text" placeholder="MM/YY" required />
                  <input type="text" placeholder="CVV" required />
                </div>
                <button type="submit">Pay Rs.{totalAmount}</button>
                <button type="button" onClick={() => setShowPayment(false)}>Cancel</button>
              </form>
            </div>
          </div>
        )}

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
          <h2>Products</h2>
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
      </main>
    </div>
  );
}

export default App;