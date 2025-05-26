import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace('Rs.', ''));
    return sum + price;
  }, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success('Payment successful! Thank you for shopping with us.');
    removeFromCart();
    navigate('/');
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: Rs.{totalAmount}</h3>
            <button onClick={handlePayment}>Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;