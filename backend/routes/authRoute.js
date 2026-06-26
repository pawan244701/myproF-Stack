const express = require('express');
const router = express.Router();
const authControllerSendOtp = require('../controllers/authControllerSendOtp');
const authControllerVerifyOTP = require('../controllers/authControllerVerifyOTP');
const authControllerReg = require('../controllers/authControllerReg');
const authControllerLogin = require('../controllers/authControllerLogin');

// send otp to email
router.post('/send-otp', authControllerSendOtp.sendOtp);
// verify opt
router.post('/verify-otp', authControllerVerifyOTP.verifyOTP);
// registration
router.post('/reg', authControllerReg.regUser);
// login
router.post('/login', authControllerLogin.loginUser)

module.exports= router;
