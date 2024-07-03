import express from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
import { createOrderController } from "../controllers/orderController.js";
const router = express.Router();
// Order routes
// create orders
router.post("/create",isAuth,createOrderController)
export default router;
