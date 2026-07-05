require('dotenv').config();
const db = require('../config/database');
const bcrypt = require('bcrypt'); // for password hashing

exports.regUser = async (req, res) => {
    const { RealName, dob, gender, country, state, district, uniqeName, password, confirmPassword, email } = req.body;
    try {
        const [checkUniqeName] = await db.query(
            "SELECT * FROM registration WHERE uniqeName = ?", [uniqeName]
        );
        if (checkUniqeName.length > 0) {
            return res.status(400).json({
                message: "user allready exist! try with diffrent uniqe name 400"
            });
        }

        //Encryption 
        const saltRound = 8;
        const hashedPassword = await bcrypt.hash(password, saltRound);

        const [insertDataToDB] = await db.query(
            "INSERT INTO registration (realName, dob, gender, contory, state, district, uniqeName, password, confirmPassword, email) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [RealName, dob, gender, country, state, district, uniqeName, hashedPassword, confirmPassword, email]
        );
        await db.query(
            "DELETE FROM email_otps WHERE email = ?", [email]
        );
        return res.status(200).json({
            message: "reg successfull.",
            username: uniqeName
        });

    } catch (err) {
        // console.error(err);
        if (err.code === 'ER_DUP_ENTRY' || err.errno === 1062) {
            return res.status(400).json({
                success: false,
                message: "this email is alread registered! try other one."
            });
        }
        return res.status(500).json({
            message: "reg failed! try again please"
        });
    }
};
