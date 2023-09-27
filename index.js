const express = require("express");
const server = express(); // initialzing server
const mongoose = require("mongoose");
const cors = require("cors");

// all routes importing
const productsRouter = require("./routes/product");
const usersRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");
const ordersRouter = require("./routes/order");

// middlewares
server.use(cors({ exposedHeaders: ['X-Total-Count'] }));
server.use(express.json()); // converting incomming json data to javascript object

// routes
server.use("/products", productsRouter.router);
server.use("/users", usersRouter.router);
server.use("/auth", authRouter.router);
server.use("/cart", cartRouter.router);
server.use("/orders", ordersRouter.router);

// connecting to mongoDB database
const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fashionStoreDB");
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
};

main();

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

// listing to port 8080
server.listen(8080, () => {
  console.log("server is up and running...");
});
