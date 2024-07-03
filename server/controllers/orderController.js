// create order 
export const createOrderController = async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(500).send({
        success: false,
        message: "Please Provide category name",
      });
    }
    await categoryModel.create({ category });
    res.status(201).send({
      success: true,
      message: `${category} category crreated successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in Create category API",
    });
  }
};
