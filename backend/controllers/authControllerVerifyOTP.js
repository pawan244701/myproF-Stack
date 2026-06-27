require('dotenv').config();
const db = require('../config/database');

exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const [rows] = await db.query(
            "SELECT * FROM email_otps WHERE email = ? AND otp = ?",
            [email, otp]
        );
        if (rows.length === 0) {
            return res.status(400).json({
                status: false,
                message: "OTP invalid!"
            });
        }
        const otpRecord = rows;
        if (new Date() > new Date(otpRecord.expires_at)) {
            return res.status(400).json({
                success: false,
                message: "OTP has expired"
            });
        }

        const [existingEmailOrNot] = await db.query(
            "SELECT * FROM registration WHERE email = ?", [email]
        );
        if (existingEmailOrNot.length > 0) {
            return res.status(200).json({
                exists: true,
                success: true,
                message: "OTP verified, sending you to home page.",
                username: existingEmailOrNot[0].uniqeName
            });
        }
        res.status(200).json({
            success: true,
            message: "OTP verified succesfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server err"
        });
    }
};
