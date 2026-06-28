require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWD,
    database: process.env.DBNAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10
});

// was not able to create table on aiven.in so doing this.
async function initDatabase() {
    const db = pool.promise();
    try {
        await db.query(`
            create table if not exists email_otps (
            id int primary key auto_increment,
            email varchar(255) not null,
            otp varchar(6) not null,
            expires_at timestamp not null
            );
        `);
        await db.query(`
            create table if not exists registration (
            id int primary key auto_increment,
            realName varchar(55) not null,
            dob varchar(12) not null,
            gender varchar(7),
            contory varchar(125) not null,
            state varchar(125) not null,
            district varchar(125) not null,
            uniqeName varchar(55) not null unique,
            password varchar(55) not null,
            confirmPassword varchar(55) not null,
            email varchar(250) not null unique
            );
        `);
        console.log("Database tables verified/created successfully.");
    } catch (err) {
        console.error("Database initialization failed:", err.message);
    }
}
initDatabase();

module.exports = pool.promise();

console.log(process.env.DBNAME);
