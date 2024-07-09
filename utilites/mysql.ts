import mysql from 'mysql2/promise';
import * as dotenv from "dotenv";

dotenv.config()

console.log('process.env', process.env);

const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DB,
});

export default connection


