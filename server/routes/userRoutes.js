import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  updateProfileController,
  registerController,
  updatePasswordController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();
// register api
router.post("/register", registerController);
// login api
router.post("/login", loginController);
// profile
router.get("/profile",isAuth,getUserProfileController)
// Logout
router.get("/logout",logoutController)
// Profile Update
router.put("/profile-update",isAuth,updateProfileController)
// Update Password
router.put("/update-password",isAuth,updatePasswordController)
export default router;
