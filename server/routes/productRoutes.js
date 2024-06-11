import express from "express";
import {
  createProductController,
  getAllProductController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
// routes
// all product
router.get("/get-all", getAllProductController);
// single product
router.get("/:id", getSingleProductController);
// create product
router.post("/create", isAuth, singleUpload, createProductController);
// update product
router.put ("/:id",isAuth,updateProductController)
// update product image
router.put ("/image/:id",isAuth,singleUpload,updateProductImageController)
export default router;
