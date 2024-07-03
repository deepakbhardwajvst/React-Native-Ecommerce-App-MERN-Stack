import productModel from "../models/productModel.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary";
//  getting all product
export const getAllProductController = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).send({
      success: true,
      message: "all Product Fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in all Product API",
      error,
    });
  }
};
//  getting single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    // validation
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "One Product Fetched successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    // cast error || Object Id
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error in single Product API",
      error,
    });
  }
};
//  getting single product
export const createProductController = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    // // validtion
    // if (!name || !description || !price || !stock) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "Please Provide all fields",
    //   });
    // }
    if (!req.file) {
      return res.status(500).send({
        success: false,
        message: "please provide product images",
      });
    }
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };

    await productModel.create({
      name,
      description,
      price,
      category,
      stock,
      images: [image],
    });

    res.status(201).send({
      success: true,
      message: "product Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get single Products API",
      error,
    });
  }
};
//  updating product
export const updateProductController = async (req, res) => {
  try {
    // find product
    const product = await productModel.findById(req.params.id);
    //  validtion
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }
    const { name, description, price, stock, category } = req.body;
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.stock = stock;
    if (category) product.category = category;
    await product.save();

    res.status(200).send({
      success: true,
      message: "product Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    // cast error || Object Id
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Get update Products API",
      error,
    });
  }
};
//  updating product image
export const updateProductImageController = async (req, res) => {
  try {
    // find product
    const product = await productModel.findById(req.params.id);
    //  validtion
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }
    //  checking file
    if (!req.file) {
      return res.status(404).send({
        success: false,
        message: "product image not found",
      });
    }

    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };
    // save
    product.images.push(image);
    await product.save();
    res.status(200).send({
      success: true,
      message: "product image Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    // cast error || Object Id
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Get update Products Image API",
      error,
    });
  }
};
//  Delete Product Image
export const deleteProductImageController = async (req, res) => {
  try {
    // find product
    const product = await productModel.findById(req.params.id);
    //  validtion
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }
    //  image id find
    const id = req.query.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "product image not found",
      });
    }
    let isExist = -1;
    product.images.forEach((item, index) => {
      if (item._id.toString() === id.toString()) isExist = index;
    });
    if (isExist < 0) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }
    // deleting image
    await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);
    product.images.splice(isExist, 1);
    await product.save();

    res.status(200).send({
      success: true,
      message: "product image deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    // cast error || Object Id
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Get Delete Products Image API",
      error,
    });
  }
};
//  Delete Product
export const deleteProductController = async (req, res) => {
  try {
    // Find Product
    const product = await productModel.findById(req.params.id);
    // validation
    if (!product) {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    // find and delete image from cloudinary
    for (let index = 0; index < product.images.length; index++) {
      await cloudinary.v2.uploader.destroy(product.images[index].public_id);
    }
    await product.deleteOne();
    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
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
      message: "Error in delete product API",
    });
  }
};
