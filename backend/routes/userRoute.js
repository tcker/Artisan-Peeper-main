import express from "express"
import { 
  registerUser, 
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  showAllUsers
} from "../controllers/userController.js"
import { authenticate, authenticateAdmin } from "../auth.js"

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutCurrentUser)

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile)
  
router.get("/showAllUsers", authenticate, authenticateAdmin, showAllUsers)

export default router;