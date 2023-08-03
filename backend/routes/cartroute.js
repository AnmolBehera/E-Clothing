const express = require("express");
const cartRoute = express.Router();
const cors = require('cors');
const { CartModel } = require("../models/cartmodel");
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Replace with your Stripe Secret Key

// Add item to cart or update quantity
cartRoute.post('/', async (req, res) => {
    const { userId, productId, img, title, price, quantity } = req.body;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      let cartItem = await Cart.findOne({ userId, productId });
      if (cartItem) {
        cartItem.quantity = quantity;
      } else {
        cartItem = new Cart({userId, productId, img, title, price, quantity});
      }
      await cartItem.save();
      res.json({ message: 'Cart updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Stripe checkout
  cartRoute.post('/checkout', async (req, res) => {
    const { products } = req.body;
    try {
      // Calculate total amount to be charged
      let totalAmount = 0;
      for (const product of products) {
        const productItem = await Product.findById(product.productId);
        totalAmount += productItem.price * product.quantity;
      }
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: products.map((item) => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.productId.name,
            },
            unit_amount: item.productId.price * 100, // Price in cents
          },
          quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: 'http://localhost:3000', // Replace with your success URL
        cancel_url: 'http://localhost:3000/pages/cart/cart.jsx', // Replace with your cancel URL
      });
  
      res.json({ sessionId: session.id });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = { cartRoute };