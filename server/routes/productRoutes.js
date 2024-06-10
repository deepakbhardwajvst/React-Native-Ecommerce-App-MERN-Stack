import express from 'express'
import { createProductController, getAllProductController, getSingleProductController } from '../controllers/productController.js'
import { isAuth } from "../middlewares/authMiddleware.js" 
import { singleUpload } from '../middlewares/multer.js'
const router = express.Router()
// routes
// all product
router.get("/get-all",getAllProductController)
// single product
router.get("/:id",getSingleProductController)
// create product
router.post("/create",isAuth,singleUpload, createProductController)
export default router