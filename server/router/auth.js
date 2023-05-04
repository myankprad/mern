const express = require("express");
const bcrypt = require("bcryptjs")
const router = express.Router();
const jwt = require("jsonwebtoken")

require("../db/conn");
const User = require("../models/user.schema");

router.get("/", (req, res) => {
  res.send("Hey");
});

router.post("/register", async (req, res) => {
    let token
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "fil all fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != password) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      //   here password hashing
      await user.save();
      res.status(201).json({ error: "user registred sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("./signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).json({ error: "please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);



  
  if(userLogin){

    const isMatch = await bcrypt.compare(password, userLogin.password)

      token = await userLogin.generateAuthToken()

      res.cookie("jwtoken", token,{
        expires: new Date(Date.now() + 25892000000 ),
        httpOnly: true 
        } )

    if (!isMatch) {
        res.status(400).json({ error: "user error" });
      } else {
        res.json({ message: "userSignIn successfully" });
      } }
      
      else {
        res.status(400).json({ error: "user error" });
  
      }
  

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;


// 
