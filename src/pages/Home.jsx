import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Perfect Imperfectness</h1>
          <p>Discover our curated collection of skincare products designed to enhance your natural beauty.</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Categories</h2>
        <div className="featured-categories">
          <div className="featured-category">
            <img src="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg" alt="Acne Care" />
            <h3>Acne Care</h3>
            <p>Effective solutions for clear, healthy skin</p>
          </div>
          <div className="featured-category">
            <img src="https://images.pexels.com/photos/6621429/pexels-photo-6621429.jpeg" alt="Pore Care" />
            <h3>Pore Care</h3>
            <p>Minimize pores for smoother skin texture</p>
          </div>
          <div className="featured-category">
            <img src="https://images.pexels.com/photos/6621446/pexels-photo-6621446.jpeg" alt="Hydration" />
            <h3>Hydration</h3>
            <p>Deep moisturizing for lasting hydration</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;