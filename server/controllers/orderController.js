import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";
import { stripe } from "../server.js";

// create order
export const createOrderController = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
    //   paymentMethod,
    //   paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    } = req.body;
    //valdiation
    if (
      !shippingInfo ||
      !orderItems ||
    //   !paymentMethod ||
    //   !paymentInfo ||
      !itemPrice ||
      !tax ||
      !shippingCharges ||
      !totalAmount
    ) {
      res.status(500).send({
        success: false,
        message: "Please Provide all details name",
      });
    }
    // Create order
    await orderModel.create({
      user: req.user._id,
      shippingInfo,
      orderItems,
    //   paymentMethod,
    //   paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    });
    // stock update
    for (let i = 0; i < orderItems.length; i++) {
      // find product
      const product = await productModel.findById(orderItems[i].product);
      product.stock -= orderItems[i].quantity;
      await product.save()
    }
    res.status(201).send({
      success: true,
      message: " order placed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in Create order API",
      error,
    });
  }
};
// get All order
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel.find({ user: req.user._id });
    //valdiation
    if (!orders) {
      res.status(500).send({
        success: false,
        message: "Orders not found",
      });
    }
    res.status(200).send({
      success: true,
      message: " order found successfully",
      totalOrders: orders.length,
      orders
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in my orders API",
      error,
    });
  }
};
// get single order
export const getSingleOrderController = async (req, res) => {
  try {
    // find orders
    const order = await orderModel.findById(req.params.id);
    //valdiation
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "order not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your order fetched",
      order,
    });
  } catch (error) {
    console.log(error);
    // cast error ||  OBJECT ID
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Get UPDATE Products API",
      error,
    });
  }
};
// for payments
export const paymetsController = async (req, res) => {
  try {
    // get amount
    const { totalAmount } = req.body;
    //valdiation of totalAmount
    if (!totalAmount) {
      return res.status(404).send({
        success: false,
        message: "Total amount required",
      });
    }
    const { client_secret } = await stripe.paymentIntents.create({
      amount: Number(totalAmount * 100),
      currency: "inr",
    });

    res.status(200).send({
      success: true,
      client_secret
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in payment API",
      error,
    });
  }
};
