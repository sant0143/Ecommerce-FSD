const { User , Role } = require("../models/index");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken')
require('dotenv').config()

const signup = (data) => {
  const response = User.create({
    email: data.email,
    username: data.username,
    password: data.password,
  });
  return response;
};

const getUserByEmail = (data) => {
  const response = User.findOne({
    where: {
      email: data,
    },
  });
  return response;
};

const verifyPassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const verifyToken = (token)=>{
    try{
    const response = jwt.verify(token,process.env.JWT_SECRET_KEY)
    return response;
    }catch(err){
        console.log(err);
    }
}

//unique field for user
//unique field for role


module.exports = {
  signup,
  getUserByEmail,
  verifyPassword,
  verifyToken,
};
