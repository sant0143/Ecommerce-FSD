const ProductController = require('../controllers/product.controller')

const routes = (app) =>{
    //to get all products
    app.get('/ecomm/api/v1/products',ProductController.getProducts);

    //to get all products with categories
    app.get('/ecomm/api/v1/productsWithCategories',ProductController.getProductsWithCategories);

    //to create a new product
    app.post('/ecomm/api/v1/products',ProductController.createProduct);

    //to update a product
    app.put('/ecomm/api/v1/products/:productId',ProductController.updateProduct);

    //to delete a product
    app.delete('/ecomm/api/v1/products/:productId',ProductController.deleteProduct);
    
    //get all products with the category id
    app.get('/ecomm/api/v1/products/:categoryId',ProductController.getAllProductsByCategoryId);

    //get products by cost range
    app.get('/ecomm/api/v1/productsByCostRange/',ProductController.getProductByCostRange);
}

module.exports = routes