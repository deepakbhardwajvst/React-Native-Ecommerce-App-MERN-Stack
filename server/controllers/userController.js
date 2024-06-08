import userModel from "../models/userModel.js";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, city, country, phone } = req.body;
    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !city ||
      !country ||
      !phone
    ) {
      res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    // checking exisiting user
    const exisitingUser = await userModel.findOne({ email });
    // validation
    if (exisitingUser) {
      return res.status(500).send({
        success: false,
        message: "email already registered",
      });
    }
    const user = await userModel.create({
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "All done, Please login",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "please add Email or Password",
      });
    }
    // user exist or not
    const user = await userModel.findOne({ email });
    // user vlidation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    // check password
    const isMatch = await user.comparePassword(password);
    // Password Validation
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Try again or click 'Forget password' to reset it.",
      });
    }
    const token = user.generateToken()
    res.status(200).cookie("token", token ,
       {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV === "development" ? true : false,
        httpOnly: process.env.NODE_ENV === "development" ? true : false,
        sameSite: process.env.NODE_ENV === "development" ? true : false,
    }).send({
      success: true,
      message: "Enjoy Happy Friday sale",
      token,user
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
};
//  Get User Profile
export const getUserProfileController = async (req,res)=>{
  try {
    const user = await userModel.findById(req.user._id);
    user.password = undefined
    res.status(200).send({
      success: true,
      message: "User Profile Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"Error in Profile API",
      error
    })
  }
}

// logout
export const logoutController = async (req,res)=>{
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        secure: process.env.NODE_ENV === "development" ? true : false,
        httpOnly: process.env.NODE_ENV === "development" ? true : false,
        sameSite: process.env.NODE_ENV === "development" ? true : false,
      })
      .send({
        success: true,
        message: "Catch you later! Thanks for stopping by.",
      });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error in Logout API",
      error
    });
  }
}
// User Profile Update 
export const updateProfileController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    const { name, email, address, city, country, phone } = req.body;
    if(name) user.name = name;
    if(email) user.email = email;
    if(address) user.address = address;
    if(city) user.city = city;
    if(country) user.country = country;
    if(phone) user.phone = phone;
    await user.save();
    res.status(200).send({
      success: true,
      message: "And there you have it! Profile updated.",
    });
  } catch (error) {
    console.log(error)
    req.status(500).send({
      success:false,
      message:"Error in Update profile API",
      error
    })
    
  }
};
// User Profile Update 
export const updatePasswordController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    const { oldPassword,newPassword } = req.body;
    // validation 
    if (!oldPassword || !newPassword){
      return res.status(500).send({
        success: false,
        message: "please provide old and new password",
      });
    }
  //  old passwork checking
  const isMatch = await user.comparePassword(oldPassword)
  if(!isMatch){
    return res.status(500).send({
        success: false,
        message: "Invalid Old Password ",
      });
  }
  user.password = newPassword
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password updated. Security enhanced.",
    });
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "Error in Update Password API",
      error,
    });
  }
};