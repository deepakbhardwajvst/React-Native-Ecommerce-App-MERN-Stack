import express from 'express'
import { getAllProductController, getSingleProductController } from '../controllers/productController.js'
const router = express.Router()
// routes
// all product
router.get("/get-all",getAllProductController)
// single product
router.get("/:id",getSingleProductController)
export default router