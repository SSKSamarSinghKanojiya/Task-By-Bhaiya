const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { registerValidationRules, validateRequest, loginValidationRules } = require("../utils/validation");

const router = express.Router();

router.post("/register",registerValidationRules(),validateRequest, registerUser);

router.post("/login",loginValidationRules(),validateRequest, loginUser);

module.exports = router;
