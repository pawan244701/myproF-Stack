const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authControllerReg = require('../controllers/authControllerReg');
const authControllerLogin = require('../controllers/authControllerLogin');

// email otp varification
router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOTP);
// registration
router.post('/reg', authControllerReg.regUser);
// login
router.post('/login', authControllerLogin.loginUser)

module.exports= router;
