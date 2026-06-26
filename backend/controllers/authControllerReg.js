require('dotenv').config();
const db = require('../config/database');

exports.regUser = async (req, res) => {
    const {realName, gender, contory, state, district, uniqeName, password, confirmPassword} = req.body;
    try{
        const [rows] = await db.query(
"INSERT INTO registration (realName, gender, contory, state, district, uniqeName, password, confirmPassword) VALUES (?,?,?,?,?,?,?,?)", 
[realName, gender, contory, state, district, uniqeName, password, confirmPassword]
        );
        return res.status(200).json({
            message: "reg successfull."
        });
    } catch (err) {
        return res.status(500).json({
            message: "reg failed! try again please"
        });
    }
};

