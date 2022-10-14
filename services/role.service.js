const {User,Role} = require('../models/index')

const addRoletoUser = async(userId,roleId)=>{
    try{
        const user = await User.findOne({
            where : {
                id : userId
            }
        })
        const role = await Role.findOne({
            where : {
                id : roleId
            }
        });
        user.addRole(role)
        return user;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    addRoletoUser
}