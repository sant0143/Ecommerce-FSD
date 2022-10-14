const authService = require('../services/auth.service')
const isAuthenticated = async(req,res,next)=>{

    const token = req.headers['x-access-token']
    if(!token){//when user is not sending any token in request
        return res.json({
            status : 401,
            message : 'JWT token is missing',
            data : {},
            err : 'Invalid or missing header in request header'
        })
    }

    //user is sending a token in the request
    const response = authService.verifyToken(token);
    if(!response){
        return res.json({
            status : 401,
            message : 'Invalid JWT token',
            data : {},
            err : 'Invalid auth details'
        })
    }

    const user = await authService.getUserByEmail(response.email)
    if(!user){
        return res.json({
            status : 401,
            message : 'JWT token send for invalid user',
            data : {},
            err : 'Invalid credantials'
        })
    }
    req.user = user;

    next();
}

module.exports = {isAuthenticated};