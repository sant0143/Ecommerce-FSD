const authController = require('../controllers/auth.controller')
const AuthenticationMiddleware = require('../middlewares/authentication.validators')

const routes = (app)=>{
    //api for signup
    app.post('/ecomm/api/v1/signup',authController.signup)
    
    //api for signin
    app.post('/ecomm/api/v1/signin',authController.signin)

    //for adding roles
    app.patch('/ecomm/api/v1/user/:userId',AuthenticationMiddleware.isAuthenticated,authController.addRoletoUser)
}

module.exports = routes