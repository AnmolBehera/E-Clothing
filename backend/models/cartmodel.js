const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userID: String,
    id: Number,
    img1: String,
    title: String,
    price: Number,
    quantity:Number
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = { CartModel };