import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js"


export const isAuth = async (req,res,next)=>{
    const {token} = req.cookies
    // Validation
    if (!token) {
        return res.status(401).send({
            success:false,
            message:"Unauthorized User"
        })   
    }
    const decodeData = JWT.verify(token, process.env.JWT_SECRET)
    req.user = await userModel.findById(decodeData._id)
    next()
}