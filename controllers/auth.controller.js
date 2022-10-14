var jwt = require("jsonwebtoken");
const authService = require("../services/auth.service");
require('dotenv').config()

const signup = async (req, res) => {
  const response = await authService.signup(req.body);
  return res.json({
    message: "Successfully signed up",
    success: true,
    data: response,
    code: 200,
  });
};

const signin = async (req, res) => {
  const userData = await authService.getUserByEmail(req.body.email);
  if (!userData) {
    return res.json({
      message: "Email is incorrect try again!",
      success: true,
      data: null,
      code: 400,
    });
  } else {
    //passwordgivenbyuser is req.body.password
    //actualHashedpassword is userData.password
    const passwordVerified = authService.verifyPassword(
      req.body.password,
      userData.password
    );
    if (passwordVerified) {
      var token = jwt.sign({ email : userData.email , password : userData.password , username : userData.username}, process.env.JWT_SECRET_KEY,{expiresIn : '2h'});
      return res.json({
        message: "Signed in successfully",
        success: true,
        code: 200,
        token : token
      });
    } else{
      return res.json({
        message: "Password is incorrect try again!",
        success: true,
        data: null,
        code: 400,
      });
    }
  }
};

const addRoletoUser =(req,res)=>{
    const response =  authService.addRoletoUser(req.params.userId,req.body.roleId)
    if(response){
        return res.json({
            message: "Role is added successfully",
            success: true,
            code: 200,
          });
    }else{
        return res.json({
            message: "Internal server error occured",
            success: true,
            code: 500,
          });
    }
}

module.exports = {
  signup,
  signin,
  addRoletoUser
};
