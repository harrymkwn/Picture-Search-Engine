const express = require("express");
const app = require("./app.js");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const ejs = require('ejs');


let db_url = process.env.DB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
  })
  .then((con) => {
      console.log("connection established");
}).catch((err)=>{
  console.log("there is error to connection with mongodb");
});


server.use(express.json());
server.use("/app", app);
server.set("view engine", "ejs");

server.listen(5000);
