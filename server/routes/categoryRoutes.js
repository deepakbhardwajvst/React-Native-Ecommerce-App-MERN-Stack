import express from "express";

import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js"; 
import { createCategory, deleteCategoriesController, getAllCategoriesController, updateCategoriesController } from "../controllers/categoryController.js";
const router = express.Router();
// Category routes
// Create Category 
router.post("/create", isAuth, isAdmin, createCategory);
// Get all Category 
router.get("/get-all",getAllCategoriesController)
// Delete Category 
router.delete("/delete/:id", isAuth, isAdmin, deleteCategoriesController);
// update Category 
router.put("/update/:id", isAuth, isAdmin, updateCategoriesController);


export default router;
