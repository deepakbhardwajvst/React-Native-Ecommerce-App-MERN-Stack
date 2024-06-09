import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      require: [true, "Category name required"],
    },
  },
  { timestamps: true }
);
const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;
