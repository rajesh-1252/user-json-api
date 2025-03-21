import mysql from 'mysql2/promise';
import 'dotenv/config'

export const pool = mysql.createPool({
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'json_api',
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
});
export const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to Db');
    connection.release();
  } catch (error) {
    console.log(error)
  }
};

