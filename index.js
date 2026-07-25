require('node:dns').setServers(['1.1.1.1','8.8.8.8'])
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://backendProject:KT3M7yS2GLg32qAo@cluster0.dzmv75i.mongodb.net/backendProject?appName=Cluster0",
).then(()=>{
    console.log('Database Connected successfully!');
    
}).catch((err)=>{
console.log('Database Connection Error',err);

});

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is Running");
});
