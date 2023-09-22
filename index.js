const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors")
const productsRouters = require("./routes/product")

// middlewares
server.use(cors({exposedHeaders: ['X-Total-Count']}))
server.use(express.json())
server.use("/products", productsRouters.router)

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fashionStoreDB");
    console.log('database connected')
  } catch (error) {
    console.log(error);
  }
};

main()

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("server is up and running...");
});
