import express from "express";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductController,
  getSingleProductController,
  productReviewController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
// routes
// all product
router.get("/get-all", getAllProductController);
// single product
router.get("/:id", getSingleProductController);
// create product
router.post("/create", isAuth, isAdmin, singleUpload, createProductController);
// update product
router.put("/:id", isAuth, isAdmin, updateProductController);
// update product image
router.put(
  "/image/:id",
  isAuth,
  isAdmin,
  singleUpload,
  updateProductImageController
);
// delete product image
router.delete(
  "/delete-image/:id",
  isAuth,
  isAdmin,
  deleteProductImageController
);
// delete product
router.delete("/delete/:id", isAuth, isAdmin, deleteProductController);

// Review Route
router.put("/:id/review", isAuth, isAdmin,productReviewController );
export default router;
