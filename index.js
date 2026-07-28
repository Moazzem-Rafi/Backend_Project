require("node:dns").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config() 
const express = require("express");
const mongoose = require("mongoose");
const mongoDbConnection = require("./config/mongoDbConnection");
const app = express();

mongoDbConnection();

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Hello Moazzem , How about You?")
  
})

app.listen(5000, () => {
  console.log("Server is Running");
});
