import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  updateProfileController,
  registerController,
  updatePasswordController,
  updateProfilePicController,
  passwordResetController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
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
// Update Password
router.post("/update-picture",isAuth, singleUpload, updateProfilePicController);
// Update Password
router.post("/reset-password", passwordResetController);
export default router;
