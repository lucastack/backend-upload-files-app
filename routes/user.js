const express = require("express");

const router = express.Router();

const AuthService = require("../services/authService");
const AuthController = require("../controllers/authController");

const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));

module.exports = router;
