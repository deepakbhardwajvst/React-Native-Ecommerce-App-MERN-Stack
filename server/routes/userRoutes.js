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
import { rateLimit } from "express-rate-limit";
// IP rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});
// router object
const router = express.Router();
// register api
router.post("/register",limiter, registerController);
// login api
router.post("/login", limiter, loginController);
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
