import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already registered"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "atleast  6+ character"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  profilePic:{
    type:String
  }
},{timestamps:true});

export const User = mongoose.model("Users", userSchema);