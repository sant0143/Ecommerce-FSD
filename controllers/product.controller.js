const ProductService = require('../services/product.service')

const getProducts = async(req,res)=>{
    const allProductsData = await ProductService.getAllProducts();
    return res.json({
    message: "Successfully fetched all the products",
    success: true,
    code: 200,
    data: allProductsData,
  });
}

const getProductsWithCategories = async(req,res)=>{
    const allProductsData = await ProductService.getAllProductsWithCategories();
    return res.json({
    message: "Successfully fetched all the products and categories",
    success: true,
    code: 200,
    data: allProductsData,
  });
}

const createProduct = async(req,res)=>{
    const response = await ProductService.createProduct(req.body);
    return res.json({
    message: "Successfully created the product",
    success: true,
    code: 200,
    data: response,
  });
}

const updateProduct = async(req,res) =>{
    const response = await ProductService.updateProduct(req.params.productId,req.body)
    return res.json({
        message: "Successfully updated the product",
        success: true,
        code: 200,
        data: response,
      });
}

const deleteProduct = async (req,res)=>{
    let response = await ProductService.deleteProduct(req.params.productId);
    return res.json({
        message: "Successfully deleted the product",
        success: true,
        code: 200,
        data: response,
      });
}

const getAllProductsByCategoryId = async(req,res)=>{
    const response = await ProductService.getAllProductsByCategoryId(req.params.categoryId);
    return res.json({
        message: "Successfully fetched all the products",
        success: true,
        code: 200,
        data: response,
      });
}

const getProductByCostRange = async (req,res)=>{
    let response = await ProductService.getProductsByCostRange(req.query);
    return res.json({
        message: "Successfully deleted the product",
        success: true,
        code: 200,
        data: response,
      });
}

module.exports = {
    getProducts,
    getProductsWithCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProductsByCategoryId,
    getProductByCostRange
};