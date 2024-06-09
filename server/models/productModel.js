import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Product name required"],
    },
    description: {
      type: String,
      require: [true, "Product description Required"],
    },
    price: {
      type: String,
      require: [true, "Product price Required"],
    },
    stock: {
      type: String,
      require: [true, "Product stock Required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    image: [
      {
        public_id: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);
const productModel = mongoose.model("products", productSchema);
export default productModel;
