import express from "express"
import { 
  registerUser, 
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  showAllUsers,
  deleteUserById,
  getUserById
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

router
  .route("/:id")
  .delete(authenticate, authenticateAdmin, deleteUserById)
  .get(authenticate, authenticateAdmin, getUserById)

export default router;