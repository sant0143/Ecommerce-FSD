"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, { through: 'User_Roles' });
    }
  }
  User.init(
    {
      email: {
        type : DataTypes.STRING,
        validate :{
          isEmail : true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 4000],
        },
      },
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    });
    User.beforeCreate(async (user) => {
      const salt =  bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(user.password,salt);
      user.password = hashedPassword;
    });
  return User;
};
