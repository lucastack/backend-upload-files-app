const bcrypt = require("bcrypt");
const User = require("../models/user");

class AuthService {
  async getUserByUserName(userName) {
    try {
      return User.findOne({ where: { name: userName } });
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async createUser(userData) {
    try {
      const hashedPassword = await bcrypt.hash(userData.userPassword, 10);
      const formattedData = {
        name: userData.userName,
        hashed_password: hashedPassword,
      };
      const user = User.create(formattedData);
      return user;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async isValidPassword(providedPassword, storedHashedPassword) {
    try {
      return await bcrypt.compare(providedPassword, storedHashedPassword);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

module.exports = AuthService;
