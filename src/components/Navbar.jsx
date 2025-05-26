import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img 
          src="https://images.pexels.com/photos/3735619/pexels-photo-3735619.jpeg" 
          alt="Perfect Imperfectness Logo" 
          className="nav-logo"
        />
        <h1>Perfect Imperfectness</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;