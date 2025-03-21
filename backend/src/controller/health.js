import { pool } from "../db/connect.js";
import { apiResponse } from "../utils/helperFunction.js";

export const serverHealth = async (req, res) => {
  apiResponse(res, { status: 'ok', database: 'connected' });
}

export const DbHealth = async (req, res) => {
  const connection = await pool.getConnection();
  await connection.ping();
  connection.release();
  apiResponse(res, { status: 'ok', database: 'connected' });
}
