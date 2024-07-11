import mongoose from "mongoose";
// review model
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "user require"],
    },
  },{timestamps:true}
);
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
    // quantity: {
    //   type: String,
    //   require: [true, "Product quantity Required"],
    // },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const productModel = mongoose.model("products", productSchema);
export default productModel;
