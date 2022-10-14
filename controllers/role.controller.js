const authService = require('../services/auth.service')


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
    addRoletoUser
}