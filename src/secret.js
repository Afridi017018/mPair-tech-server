require('dotenv').config();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const password = process.env.PASSWORD || '';
const user = process.env.USER || 'root';
const jwt_secret = process.env.JWT_SECRET


module.exports = {port, host, password, user, jwt_secret} ;