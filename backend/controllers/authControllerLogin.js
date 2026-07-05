require('dotenv').config();
const db = require('../config/database');
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
    const { uniqeName, pass } = req.body; // obj destructuring: took 30 min+ to debug. juct typed var incorretliy
    try {
        const [rows] = await db.query("SELECT * FROM registration WHERE uniqeName = ?", [uniqeName]);
        if (rows.length === 0) {
            return res.status(400).json({
                message: "no user or wrong password 400"
            });
        }

        const user = rows[0]; // getting the user obj
        const isPasswordMached = await bcrypt.compare(pass, user.password); // bcrypt password comparision
        if (isPasswordMached !== user.password) {
            return res.status(401).json({
                message: "no user or wrong password 401"
            });
        }
        return res.status(200).json({
            message: "login successful",
            username: user.uniqeName
        });
    } catch (err) {
        return res.status(500).json({
            message: "issue with server, try again later."
        })
    }
}
