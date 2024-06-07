import express from "express";
import {
  getUserProfileController,
  loginController,
  registerController,
} from "../controllers/userController.js";
// router object
const router = express.Router();
// register api
router.post("/register", registerController);
// login api
router.post("/login", loginController);
// profile
router.get("/profile",getUserProfileController)
export default router;
