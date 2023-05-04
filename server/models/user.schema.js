const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email :{
        type :String,
        require : true
    },
    phone :{
        type : Number,
        require : true
    },
    work :{
        type:String,
        require : true
    },
    password :{
        type :String,
        require :true
    },
    cpassword:{
        type: String,
        require :true
    }, tokens:[
        {
            token :{
                type: String,
                require :true
            }
        }
    ]
})



// password hashing

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password, 12)
        this.cpassword = bcrypt.hash(this.cpassword, 12)

    }
    next()
})

// generating token 
const SECRET_KEY = process.env.SECRET_KEY
userSchema.methods.generateAuthToken = async  function(){
    try{
        token = jwt.sign({_id : this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token : token })
        await this.save()
        return token
    } catch(err){
console.log(err)
    }
}


const User = mongoose.model('USER', userSchema)

module.exports = User;