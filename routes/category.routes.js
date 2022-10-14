const CategoryController = require('../controllers/category.controller');
const CategoryMiddleware = require('../middlewares/category.validators');
const AuthenticationMiddleware = require('../middlewares/authentication.validators')
//the app in the brackets is the express app
const routes = (app)=>{
    //to get all categories
    app.get('/ecomm/api/v1/categories',CategoryController.getCategories);

    //to create a new category
    app.post('/ecomm/api/v1/categories',AuthenticationMiddleware.isAuthenticated,CategoryMiddleware.validatecreate,CategoryController.createCategory);

    //to get all categories by id
    app.get('/ecomm/api/v1/categories/:id',CategoryController.getCategoriesById);

    //to get all categories by name
    app.get('/ecomm/api/v1/categoriesByName/',CategoryController.getCategoriesByName);

     //to update categories by given id
    app.put('/ecomm/api/v1/categories/:id',AuthenticationMiddleware.isAuthenticated,CategoryController.updateCategory);

    //to delete a category by given id
    app.delete('/ecomm/api/v1/categories/:id',CategoryController.deleteCategoryById);
}

module.exports = routes;

