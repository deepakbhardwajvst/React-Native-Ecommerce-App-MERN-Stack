import userModel from "../models/userModel.js"
export const registerController = async (req,res)=>{
    try {
        const {name,email ,password,address,city, country,phone} =  req.body
        if (!name || !email || !password || !address || !city || !country || !phone) {
            res.status(500).send({
              success: false,
              message: "Please provide all fields",
            });
        }
        // checking exisiting user
        const exisitingUser = await userModel.findOne({email})
        // validation
        if (exisitingUser) {
          return res.status(500).send({
            success:false,
            message:"email already registered"
          })
        } 
        const user = await userModel.create({
          name,
          email,
          password,
          address,
          city,
          country,
          phone
        }); 
        res.status(201).send({
          success: true,
          message: "All done, Please login",
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Register API",
            error
        })
    }
}
export const loginController = async (req,res)=>{
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
    res.status(200).send({
      success: true,
      message: "Enjoy Happy Friday sale",
      user,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
}