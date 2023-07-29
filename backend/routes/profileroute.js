const express = require("express");
const profileRoute = express.Router();
const { UserModel } = require("../models/usermodel");

profileRoute.get("/", async (req, res) => {
    const userId = req.body.userID;
    try{
      const findUser = await UserModel.findById( userId );
      if(findUser){
        res.send(findUser);
      }else{
        res.send({msg:"Error"});
      }
    }catch(error){
      res.send({msg:error});
    }
  });

  module.exports = { profileRoute };
