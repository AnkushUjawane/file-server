const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require("../middleware/auth.middleware");
const validate = require('../middleware/validate.middleware');
const { signupSchema, loginSchema } = require('../validators/auth.validator');

router.post('/signup', validate(signupSchema) ,authController.signup);
router.post('/login', validate(loginSchema) ,authController.login);
router.get("/me", authMiddleware, authController.getMe);

module.exports = router;