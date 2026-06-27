require('dotenv').config();
const db = require('../config/database');

exports.regUser = async (req, res) => {
    const { realName, dob, gender, contory, state, district, uniqeName, password, confirmPassword, email } = req.body;
    try {
        const [checkUniqeName] = await db.query(
            "SELECT * FROM registration WHERE uniqeName = ?", [uniqeName]
        );
        if (checkUniqeName.length > 0) {
            return res.status(400).json({
                message: "user allready exist! try with diffrent uniqe name 400"
            });
        }
        const [insertDataToDB] = await db.query(
            "INSERT INTO registration (realName, dob, gender, contory, state, district, uniqeName, password, confirmPassword, email) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [realName, dob, gender, contory, state, district, uniqeName, password, confirmPassword, email]
        );
        return res.status(200).json({
            message: "reg successfull.",
            username: uniqeName
        });

    } catch (err) {
        return res.status(500).json({
            message: "reg failed! try again please"
        });
    }
};
