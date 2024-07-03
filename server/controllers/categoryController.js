import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";

export const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(500).send({
        success: false,
        message: "Please Provide category name",
      });
    }
    await categoryModel.create({ category });
    res.status(201).send({
      success: true,
      message: `${category} category crreated successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in Create category API",
    });
  }
};

export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Category fetched succcessfully",
      totalCategories: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get all category API",
    });
  }
};
// Delete Categories
export const deleteCategoriesController = async (req, res) => {
  try {
    // find category id
    const category = await categoryModel.findById(req.params.id);
    // validation
    if (!category) {
      res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    // find product with category id
    const products = await productModel.find({ category: category._id });
    // update product id
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = undefined;
      await product.save();
    }
    // delete one category
    await category.deleteOne();
    res.status(200).send({
      success: true,
      message: "category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error in delete Categories API",
    });
  }
};
// Update Categories
export const updateCategoriesController = async (req, res) => {
  try {
    // find category id
    const category = await categoryModel.findById(req.params.id);
    // validation
    if (!category) {
      res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    // find product with category id
    const products = await productModel.find({ category: category._id });
    const { updatedCategory } = req.body;
    // update product id
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = updatedCategory;
      await product.save();
    }
    // save
    if(updatedCategory) category.category = updatedCategory
    await category.save();
    res.status(200).send({
      success: true,
      message: "category updated successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error in Update Categories API",
    });
  }
};
