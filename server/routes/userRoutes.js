import express from "express"
import { loginController, registerController } from "../controllers/userController.js"
// router object
const router = express.Router()
// register api
router.post("/register",registerController)
// login api
router.post("/login",loginController)


export default router