const express = require("express");
const { userRoute } = require("./routes/userroute");
const { connection } = require("./main");
const cors = require("cors");
const { Auth } = require("./middlewares/middleware");
const { profileRoute } = require("./routes/profileroute");
const { productRoute } = require("./routes/productroute");
const { cartRoute } = require("./routes/cartroute");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRoute);


app.use("/products",productRoute);

app.use(Auth);

app.use("/profile", profileRoute);

app.use("/cart",cartRoute);

app.get("/", (req, res) => {
  res.send("Hello ProDEV5!");
});

app.listen(9090, async () => {
  try {
    await connection;
    console.log("Server is running");
  } catch (error) {
    console.log("Error occured while connecting!");
  }
});
