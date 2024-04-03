import express from "express"
import { 
  registerUser, 
  loginUser,
  logoutCurrentUser
} from "../controllers/userController.js"
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutCurrentUser)

export default router;