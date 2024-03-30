const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

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
    firstName, lastName, mobileNo, email, isAdmin, password: hashedPassword
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

module.exports = {
  registerUser
}