const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    userID: String,
    id: Number,
    img1: String,
    title: String,
    brand: String,
    price: Number,
    status: String,
    address: String,
    quantity: Number
});

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = { OrderModel };