import { pool } from "../db/connect.js";
import BadRequestError from "../errors/bad-request.js";
import { apiResponse } from "../utils/helperFunction.js";


export const getUser = async (req, res) => {
    if (!pool) {
        throw new BadRequestError('Database connection failed');
    }
    const [rows] = await pool.query(`
    SELECT 
        u.*,
        JSON_OBJECT('color', h.color, 'type', h.type) AS hair,
        JSON_OBJECT(
            'address', a.address, 'city', a.city, 'state', a.state, 'state_code', a.state_code, 
            'postal_code', a.postal_code, 'latitude', a.latitude, 'longitude', a.longitude, 'country', a.country
        ) AS address,
        JSON_OBJECT(
            'card_expire', b.card_expire, 'card_number', b.card_number, 'card_type', b.card_type, 
            'currency', b.currency, 'iban', b.iban
        ) AS bank,
        JSON_OBJECT(
            'department', c.department, 'company_name', c.company_name, 'title', c.title, 
            'address', c.address, 'city', c.city, 'state', c.state, 'state_code', c.state_code, 
            'postal_code', c.postal_code, 'latitude', c.latitude, 'longitude', c.longitude, 'country', c.country
        ) AS company,
        JSON_OBJECT('coin', cr.coin, 'wallet', cr.wallet, 'network', cr.network) AS crypto
    FROM users u
    LEFT JOIN user_hair h ON u.id = h.user_id
    LEFT JOIN user_address a ON u.id = a.user_id
    LEFT JOIN user_bank b ON u.id = b.user_id
    LEFT JOIN user_company c ON u.id = c.user_id
    LEFT JOIN user_crypto cr ON u.id = cr.user_id
`);


    apiResponse(res, { users: rows, total: rows.length });
};
