const authService = require("../services/authService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async login(req, res) {
    try {
      const { userName, userPassword } = req.body;
      console.log("inputs", userName, userPassword);

      const user = await this.authService.getUserByUserName(userName);

      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      const isPasswordValid = await bcrypt.compare(
        userPassword,
        user.hashed_password,
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      const token = jwt.sign({ user }, "privatekey", { expiresIn: "12h" });
      res
        .status(200)
        .json({ message: "Successfully authenticated", token: token });
    } catch (error) {
      console.error("Error during authentication:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async register(req, res) {
    const { userName, userPassword } = req.body;
    const user = await this.authService.getUserByUserName(userName);

    if (user) {
      return res.status(401).json({ error: "Username already in use" });
    }
    await this.authService.createUser({ userName, userPassword });
    return res.status(200).json({ message: "Succesfully signed up" });
  }
}

module.exports = AuthController;
