import express from "express";

import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
import { createOrderController, getAllOrdersController, getSingleOrderController, paymetsController } from "../controllers/orderController.js";
const router = express.Router();
// Order routes
// create orders
router.post("/create", isAuth, createOrderController);
// get all orders
router.get("/my-orders", isAuth, getAllOrdersController);
// get single order
router.get("/single/:id", isAuth, getSingleOrderController);
// payments
router.post("/payments", isAuth, paymetsController);
// Admin Side
router.post("/admin/get-all-orders", isAuth, isAdmin,);
export default router;
