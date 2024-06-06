import express from "express";
import { testController } from "../controllers/testController.js";
// Router Object
const router = express.Router()
// Route

router.get("/test",testController)
export default router
