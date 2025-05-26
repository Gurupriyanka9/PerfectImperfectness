import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './css/styles.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Removed from cart!');
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        <Toaster position="top-right" />
        <Navbar cartCount={cart.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;