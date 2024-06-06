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
            message:"Error in register API",
            error
        })
    }
}