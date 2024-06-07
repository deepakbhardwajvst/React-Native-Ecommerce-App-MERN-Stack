import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
// hash password
userSchema.pre('save',async function () {
  this.password = await bcrypt.hash(this.password, 10)
})
// compare password function for login
userSchema.methods.comparePassword = async function(plainPassword){
  return await bcrypt.compare(plainPassword, this.password)
}
const userModel = mongoose.model("Users", userSchema);
export default userModel 