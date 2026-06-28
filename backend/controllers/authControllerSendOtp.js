require('dotenv').config();
const db = require('../config/database');
//const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// const transporter = nodemailer.createTransport({
//     service: 'email',
//     // mail; wasn't getting send and were giving me server err. So changing port for mail service from 587 to 465
//     // bcoz render blocks it to prevent spams [gemini told]
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAILPASS
//     }
// });

// ask for email and send res accordinglly
exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({
        message: "Email is required!"
    });

    // rendom 6 digit otp generation
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expireAt = new Date(Date.now() + 5 * 60 * 1000);
    try {
        const [availbleOTP] = await db.query(
            "SELECT * FROM email_otps WHERE email = ? AND expires_at > NOW()", [email]
        );
        if (availbleOTP.length > 0) {
            return res.status(400).json({
                success: false,
                message: "OTP is already sended on your email!"
            });
        }

        await db.query(
            `INSERT INTO email_otps (email, otp, expires_at)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE otp = ?, expires_at = ?`,
            [email, otp, expireAt, otp, expireAt]
        );
        // sending email containning otp
        // await transporter.sendMail({
        //     from: `"myproF-Stack" <${process.env.EMAIL}>`,
        //     replyTo: 'noreply@pawan244701.com',
        //     to: email,
        //     subject: 'Your OTP to verify your Email',
        //     text: `Your OTP is ${otp}. It is valid only for 5 minites.`
        // });

        // console.log('testing mail offline');
        // console.log(`user email: ${email}`);
        // console.log(`opt: ${otp}`);
        // console.log('=============================');

// nodemailer not working bcoz port 587 adn 465 (smtp) are not working with render
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Your OTP to verify your Email',
            text: `Your OTP is ${otp}. It is valid only for 5 minites.`
        });


        return res.status(200).json({
            message: "OTP send successfully."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server err wait and than try again"
        });
    }
};
