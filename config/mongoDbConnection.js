const mongoose = require("mongoose");

let mongoDbConnection = () => {
  return mongoose
    .connect(
      "mongodb+srv://backendProject:KT3M7yS2GLg32qAo@cluster0.dzmv75i.mongodb.net/backendProject?appName=Cluster0",
    )
    .then(() => {
      console.log("Database Connected.");
    })
    .catch((err) => {
      console.log("Database Connection Error", err);
    });
};

module.exports = mongoDbConnection;
