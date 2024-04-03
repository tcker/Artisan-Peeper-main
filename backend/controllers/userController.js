import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import createToken from "../createToken.js"

const registerUser = asyncHandler( async(req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body
  if(!firstName || !lastName || !email || !password){
    res.send(400).json("Please enter all fields")
  }

  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400).json("Email already Exists")
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isAdmin: isAdmin
  })

  try {
    await newUser.save();
    createToken(res, newUser._id)

    res.status(201).json({
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      isAdmin: newUser.isAdmin
    })
  } catch(error){
    res.status(400)
    throw new Error("Invalid user data")
  }
})

export {
  registerUser
}