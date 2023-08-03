const express = require("express");
const productRoute = express.Router();
const { ProductModel } = require("../models/productmodel");

productRoute.get("/", async(req, res) => {
  try{
  const products = await ProductModel.find({});
  res.send(products);
  }catch(error){
    res.send({msg:error});
  }
});

productRoute.get("/pr/:category", async(req, res) => {
  let category = req.params.category;
  console.log(category);
  if(category=="Joggers")
    category="Jogger";
  else if(category=="TShirts")
    category="tshirt";
  else if(category=="Leggings")
    category="legging";
  else if(category=="Shorts")
    category="Shorts";
  else if(category=="Hoodies")
    category="Hoodie"; 
  else if(category=="Tops")
    category="top";    
  try{
  const products = await ProductModel.find({ Category: category.toLowerCase()});
  //res.send(products);
  if(products){
    res.send(products);
  }else{
    res.send({msg:"error"});
  }
  }catch(error){
    res.send({msg:error});
  }
});

productRoute.get("/p/:brand", async(req, res) => {
  const brand = req.params.brand;
  console.log(brand);
  try{
  const products = await ProductModel.find({brand: brand});
  //res.send(products);
  if(products){
    console.log(products);
  }else{
    res.send({msg:"error"});
  }
  }catch(error){
    res.send({msg:error});
  }
});

productRoute.get("/sp/:id", async (req, res) => {
  const id = req.params.id; 
  try {
    const product = await ProductModel.findOne({ _id: id });
    if (product) {
      res.send(product);
    } else {
      console.log("Product not found");
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = { productRoute };