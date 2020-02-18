const express = require("express");
const app = require("./app.js");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
let db_url = process.env.DB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(con => {
      console.log("connsection established");
    // console.log(con.connections);
});
server.use(express.json());
server.use("/app", app);
server.engine("html", require("ejs").renderFile);
server.set("view engine", "html");

server.listen(5000);
