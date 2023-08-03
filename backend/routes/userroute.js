const express = require("express");
const userRoute = express.Router();
const { UserModel } = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.get("/", (req, res) => {
  res.send("User Registration Portal");
});

userRoute.post("/register", async (req, res) => {
  const { fname,lname, email, phoneno, pass } = req.body;
  try {
    const findUser = await UserModel.find({ email });
    if (findUser.length === 0) {
      bcrypt.hash(pass, 3, async (err, hashed_pass) => {
        if (err) {
          res.send({ msg: "error occured in hashing password", err });
        } else {
          let user = new UserModel({ fname,lname, email, phoneno, pass: hashed_pass });
          await user.save();
          res.send({ msg: "User Registered Successfully" });
        }
      });
    } else {
      res.send({ msg: "Error Signing Up!" });
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const findUser = await UserModel.findOne({ email });
    console.log(findUser);
    if (findUser) {
      bcrypt.compare(pass, findUser.pass, (err, hashed) => {
        if (hashed) {
          const token = jwt.sign({ userID: findUser._id }, "abhijit");
          res.send({ msg: "Successfully Logged In", token: token });
        } else {
          res.send({ msg: "Wrong credentials!!!" });
        }
      });
    } else {
      res.send({ msg: "There was a problem logging in" });
    }
  } catch (error) {
    res.send({ msg: error });
  }
});

module.exports = { userRoute };
