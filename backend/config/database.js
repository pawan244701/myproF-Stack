require('dotenv').config();

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,    
    password: process.env.PASSWD,
    database: process.env.DBNAME,
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool.promise();

console.log(process.env.DBNAME);
