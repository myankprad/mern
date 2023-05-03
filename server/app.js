const dotenv = require("dotenv")
const express = require("express")

require("./db/conn")

const app = express()

dotenv.config({path: "./config.env"})

const PORT = process.env.PORT

app.use(express.json())

app.use(require("./router/auth"))
// middleware

// const middleware =()=>{

// }

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

app.listen(PORT, (req, res) => {
  console.log("server is listening");
});
