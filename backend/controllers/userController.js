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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if(user &&(await bcrypt.compare(password, user.password))){
    createToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(400)
    throw new Error("Wrong Email or Password")
  }
})

const logoutCurrentUser = asyncHandler( async(req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0)
  })

  res.status(200).json({ message: "Logged out successfully -cookie removed-" })
})

const getCurrentUserProfile = asyncHandler( async(req, res) => {
  const user = await User.findById(req.user._id)

  if(user){
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

const updateCurrentUserProfile = asyncHandler( async(req, res) => {
  const user = await User.findById(req.user._id)

  if(user){
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email

    if(req.body.password){
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      user.password = hashedPassword
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

const showAllUsers = asyncHandler( async(req, res) => {
  const users = await User.find({})
  res.json(users)
})

const deleteUserById = asyncHandler( async(req, res) => {
  const user = await User.findById(req.params.id)

  if(user){
    if(user.isAdmin){
      res.status(400)
      throw new Error("Cannot delete admin user")
    }

    await User.deleteOne({_id: user._id})
    res.json({message: "User removed"})
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

const getUserById = asyncHandler( async(req, res) => {
  const user = await User.findById(req.params.id)

  if(user){
    res.json(user)
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

export {
  registerUser,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  showAllUsers,
  deleteUserById,
  getUserById
}