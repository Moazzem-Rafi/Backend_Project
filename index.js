require("node:dns").setServers(["1.1.1.1", "8.8.8.8"]);
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoDbConnection = require("./config/mongoDbConnection");
const authRoute = require("./routes/authRoute");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger')


const app = express();
const cors = require('cors')

mongoDbConnection();

app.use(express.json());
app.use(cors())

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);


app.use('/api/v1/auth', authRoute);

app.listen(5000, () => {
  console.log("Server is Running");
});
