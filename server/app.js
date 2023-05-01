const express = require("express");

const app = express();

// middleware

const middleware =()=>{
  
}



app.get("/", (req, res) => {
  res.send("hey boyyyyy");
});

app.get("/about", (req, res) => {
  res.send("hey about");
});

app.get("/contact", (req, res) => {
  res.send("hey boyyyyy contact me");
});

app.get("/signin", (req, res) => {
  res.send("fill your details");
});

app.get("/signup", (req, res) => {
  res.send("signup please");
});

app.listen(3000, (req, res) => {
  console.log("server is listening");
});
