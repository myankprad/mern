const mongoose = require("mongoose")

const MONGO_URI = process.env.DATABASE



mongoose.connect(MONGO_URI).then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log("no connection", err);
  });
