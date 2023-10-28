const { Model, DataTypes } = require("sequelize");
const sequelize = require("../services/db");

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
  },
  { sequelize, modelName: "user" },
);

module.exports = User;
