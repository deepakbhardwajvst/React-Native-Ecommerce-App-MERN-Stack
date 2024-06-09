import productModel from "../models/productModel.js"

//  getting all product
export const getAllProductController = async (req,res)=>{
    try {
        const products = await productModel.find({})
        res.status(200).send({
          success:true,
          message: "all Product Fetched successfully",
          products,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({      
        success: false,
        message: "Error in all Product API",
        error,
        })
    }
}  
//  getting single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    // validation
    if(!product){
        return res.status(404).send({
          success: false,
          message: "Product Not Found",
        });
    }
    res.status(200).send({
      success: true,
      message: "One Product Fetched successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    // cast error || Object Id
    if (error.name === "CastError"){
         res.status(500).send({
           success: false,
           message: "Invalid id",
           
         });
    }
      res.status(500).send({
        success: false,
        message: "Error in single Product API",
        error,
      });
  }
};  