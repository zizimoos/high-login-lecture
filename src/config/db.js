import mysql from "mysql";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  post: process.env.DB_POST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();
console.log(`✅ mysql connection`);

export default db;
