import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // Replace with your Stripe Publishable Key

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/cart`);
      if (!response.ok) {
        throw new Error('Error fetching cart items');
      }
      const data = await response.json();
      setCartItems(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveItem = (productId) => {
    // Update cart items after removing item from the cart
    const updatedCartItems = cartItems.filter((item) => item.productId._id !== productId);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (productId, quantity) => {
    // Update cart items after changing quantity
    const updatedCartItems = cartItems.map((item) => {
      if (item.productId._id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch('http://localhost:9090/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: cartItems.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
          })),
        }),
      });
      if (!response.ok) {
        throw new Error('Error initiating Stripe checkout');
      }
      const data = await response.json();
      const sessionId = data.sessionId;
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });
      if (error) {
        console.error('Error during Stripe checkout:', error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId._id}>
              {item.productId.name} - ${item.productId.price} (Quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.productId._id, e.target.value)}
              />
              )
              <button onClick={() => handleRemoveItem(item.productId._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
