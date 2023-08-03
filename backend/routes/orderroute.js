const express = require("express");
const orderRoute = express.Router();
const { OrderModel } = require("../models/ordermodel");

orderRoute.post("/", async (req, res) => {
    const { userID, id, img1, title, brand, price, status, address,quantity } = req.body;
    try{
        let order = new OrderModel({ userID, id, img1, title, brand, price, status, address, quantity });
        await order.save();
        res.send({ msg: "Successfully Saved!" });
        }catch(error){
          res.send({msg:error});
        }
});

orderRoute.get("/", async (req, res) => {
    const userId = req.body.userID;
    try{
        const product = await ProductModel.findOne({userID: userId.trim()});
        res.send(product);
        }catch(error){
          res.send({msg:error});
        }
});

module.exports = { orderRoute };