import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { productsData } from '../assets/data.js';
import './css/styles.css';

function App() {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
    setShowProducts(true);
  };

  const handleCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
    setShowProducts(true);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success('Added to cart!', {
      style: {
        background: '#7a4fa0',
        color: 'white',
      },
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Removed from cart!', {
      style: {
        background: '#7a4fa0',
        color: 'white',
      },
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success('Payment successful! Thank you for shopping with us.', {
      duration: 5000,
      style: {
        background: '#7a4fa0',
        color: 'white',
      },
    });
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
      <nav className="navbar">
        <div className="nav-brand">Perfect Imperfectness</div>
        <div className="nav-links">
          <a href="#home" onClick={() => setShowProducts(false)}>Home</a>
          <a href="#products" onClick={() => setShowProducts(true)}>Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-search">
          <input 
            type="text" 
            onChange={handleSearch} 
            placeholder="Search products..." 
          />
          <button 
            className="cart-button"
            onClick={() => setShowCart(true)}
          >
            🛒 ({cart.length})
          </button>
        </div>
      </nav>

      {!showProducts ? (
        <div className="home-content">
          <section className="hero-section">
            <h1>Embrace Your Natural Beauty</h1>
            <p>Discover skincare solutions tailored to your unique beauty journey</p>
            <button onClick={() => setShowProducts(true)}>Shop Now</button>
          </section>

          <section id="about" className="about-section">
            <h2>About Us</h2>
            <p>At Perfect Imperfectness, we believe in celebrating your unique beauty. Our carefully curated skincare products are designed to enhance your natural glow while addressing your specific skin concerns.</p>
          </section>

          <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div>
                <h3>Email</h3>
                <p>info@perfectimperfectness.com</p>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3>Address</h3>
                <p>123 Beauty Lane, Skincare City, SC 12345</p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <main>
          {showCart && (
            <div className="cart-modal">
              <div className="cart-content">
                <h2 className="section-title">Your Shopping Cart</h2>
                {cart.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#666' }}>Your cart is empty</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  ))
                )}
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
                  <button onClick={() => setShowCart(false)}>Continue Shopping</button>
                </div>
              </div>
            </div>
          )}

          {showPayment && (
            <div className="payment-modal">
              <div className="payment-content">
                <h2 className="section-title">Payment Details</h2>
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
            <h2 className="section-title">Shop by Category</h2>
            <div className="category-list">
              <button onClick={() => handleCategory('acne')}>Acne Care</button>
              <button onClick={() => handleCategory('pores')}>Pore Cleansing</button>
              <button onClick={() => handleCategory('hydration')}>Hydration</button>
              <button onClick={() => handleCategory('collagen')}>Collagen Boost</button>
              <button onClick={() => handleCategory('sensitive')}>Sensitive Skin</button>
            </div>
          </section>

          <section id="products">
            <h2 className="section-title">Our Products</h2>
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
      )}
    </div>
  );
}

export default App;