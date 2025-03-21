import mysql from 'mysql2/promise';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sqlFilePath = path.join(__dirname, '..', 'table', 'user.sql');
const migrationQuery = fs.readFileSync(sqlFilePath, 'utf-8');

const pool = mysql.createPool({
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'json_api',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
});

const runMigration = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Running migration...');
    await connection.query(migrationQuery);
    console.log('Migration completed successfully.');
    connection.release();
  } catch (error) {
    console.error('Error in migration:', error);
  } finally {
    pool.end();
  }
};

runMigration();
