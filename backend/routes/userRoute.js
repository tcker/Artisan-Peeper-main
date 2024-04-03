import express from "express"
import { 
  registerUser, 
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile
} from "../controllers/userController.js"
import { authenticate } from "../auth.js"

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutCurrentUser)

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)

export default router;