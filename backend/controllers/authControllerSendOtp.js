require('dotenv').config();
const db = require('../config/database');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'email',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASS
    }
});

// ask for email and send res accordinglly
exports.sendOtp = async(req, res) => {
    const {email} = req.body;
    if (!email) return res.status(400).json({
        message: "Email is required!"
    });
    
// rendom 6 digit otp generation
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expireAt = new Date(Date.now() + 5 * 60 * 1000);
    try {
        await db.query(
            `INSERT INTO email_otps (email, otp, expires_at)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE otp = ?, expires_at = ?`,
            [email, otp, expireAt, otp, expireAt]
        );
// sending email containning otp
        // await transporter.sendMail({
        //     from: `"myproF-Stack" <${process.env.EMAIL}>`,
        //     to: email,
        //     subject: 'Your OTP to verify your Email',
        //     text: `Your OTP is ${otp}. It is valid only for 5 minites.`
        // });

console.log('testing mail offline');
console.log(`user email: ${email}`);
console.log(`opt: ${otp}`);
console.log('=============================');


        res.status(200).json({
            message: "OTP send successfully."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server err wait and than try again"
        });
    }
};
