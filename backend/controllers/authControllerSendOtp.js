// require('dotenv').config();
// const db = require('../config/database');
// //const nodemailer = require('nodemailer');
// const { Resend } = require('resend');
// const resend = new Resend(process.env.RESEND_API_KEY);

// // const transporter = nodemailer.createTransport({
// //     service: 'email',
// //     // mail; wasn't getting send and were giving me server err. So changing port for mail service from 587 to 465
// //     // bcoz render blocks it to prevent spams [gemini told]
// //     host: 'smtp.gmail.com',
// //     port: 465,
// //     secure: true,
// //     auth: {
// //         user: process.env.EMAIL,
// //         pass: process.env.EMAILPASS
// //     }
// // });

// // ask for email and send res accordinglly
// exports.sendOtp = async (req, res) => {
//     const { email } = req.body;
//     if (!email) return res.status(400).json({
//         message: "Email is required!"
//     });

//     // rendom 6 digit otp generation
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const expireAt = new Date(Date.now() + 5 * 60 * 1000);
//     try {
//         const [availbleOTP] = await db.query(
//             "SELECT * FROM email_otps WHERE email = ? AND expires_at > NOW()", [email]
//         );
//         if (availbleOTP.length > 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "OTP is already sended on your email!"
//             });
//         }

//         await db.query(
//             `INSERT INTO email_otps (email, otp, expires_at)
//             VALUES (?, ?, ?)
//             ON DUPLICATE KEY UPDATE otp = ?, expires_at = ?`,
//             [email, otp, expireAt, otp, expireAt]
//         );
//         // sending email containning otp
//         // await transporter.sendMail({
//         //     from: `"myproF-Stack" <${process.env.EMAIL}>`,
//         //     replyTo: 'noreply@pawan244701.com',
//         //     to: email,
//         //     subject: 'Your OTP to verify your Email',
//         //     text: `Your OTP is ${otp}. It is valid only for 5 minites.`
//         // });

//         // console.log('testing mail offline');
//         // console.log(`user email: ${email}`);
//         // console.log(`opt: ${otp}`);
//         // console.log('=============================');

// // nodemailer not working bcoz port 587 adn 465 (smtp) are not working with render
//         await resend.emails.send({
//             from: 'onboarding@resend.dev',
//             to: email,
//             subject: 'Your OTP to verify your Email',
//             text: `Your OTP is ${otp}. It is valid only for 5 minites.`
//         });


//         return res.status(200).json({
//             message: "OTP send successfully."
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "Server err wait and than try again"
//         });
//     }
// };






// correct this and comment unwanted lines, don't delete anything
require('dotenv').config();
const db = require('../config/database');
const brevo = require('@getbrevo/brevo'); // Adjusted to official Brevo SDK

// Initializing the transactional email service using your saved Render API Key
const apiInstance = new brevo.TransactionalEmailsApi();

// COMMENTED OUT: Old initialization method
// apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

// FIXED: Sets the API key explicitly matching your Render variable: BREVO_API_KEY
let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;

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

        // Building the Brevo Transactional payload using standard open web structures
        let sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.subject = 'Your OTP to verify your Email';
        sendSmtpEmail.textContent = `Your OTP is ${otp}. It is valid only for 5 minites.`;
        sendSmtpEmail.sender = { "name": "myproF-Stack", "email": process.env.EMAIL };
        sendSmtpEmail.to = [{ "email": email }];

        // Fire request over standard port 443 web layer to clear Render's firewall
        await apiInstance.sendTransacEmail(sendSmtpEmail);

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
