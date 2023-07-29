const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    img1: String,
    img2: String,
    title: String,
    price: Number,
    desc: String,
    Category: String,
    brand: String,
    gender: String
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = { ProductModel };