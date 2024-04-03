const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const auth = require("../auth")

const registerUser = asyncHandler( async(req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body
  if(!email && !password){
    res.send(400).json("Please enter all fields")
  }

  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400)
    alert("Email already Exists")
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = await User.create({
    firstName, lastName, email, isAdmin, password: hashedPassword
  })

  if(user){
    res.status(201)
    res.json({
      _id: user.id,
      email: user.email
    })
  } else {
    res.status(400)
    res.json("Invalid user data")
  }
})

const loginUser = asyncHandler( async(req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({email})
  console.log(user)
  
  if(user && (await bcrypt.compareSync(password, user.password))){
    res.json({
      _id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: auth.createAccessToken(user)
    })
  } else {
    res.status(400)
    throw new Error("Invalid Credential")
  }
})

module.exports = {
  registerUser,
  loginUser
}