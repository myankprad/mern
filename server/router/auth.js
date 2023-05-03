const express = require("express")

const router = express.Router()

require("../db/conn")
const User = require("../models/user.schema")

router.get("/", (req, res)=>{
    res.send("Hey")
})

router.post("/register", (req, res)=>{
   const {name, email, phone, work, password, cpassword}= req.body;

   if(!name || !email || !phone || !work || !password ||!cpassword){
    return res.status(422).json({error: "fil all fields"})
   }

  User.findOne({email: email}) 
  .then((userExist)=>{
    if(userExist){
    return res.status(422).json({error: "Email akready exist"})
    }

    const user = new User({name, email, phone, work, password, cpassword})

    user.save().then(()=>{
    res.status(422).json({error: "user registered succesfully"})

    }).catch((err)=> res.status(500).json({error: "failed to register"}))

  }).catch((err)=> console.log(err) )

})

module.exports = router

