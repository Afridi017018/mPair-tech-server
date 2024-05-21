require('dotenv').config();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const password = process.env.PASSWORD || '';
const user = process.env.USER || 'root';


module.exports = {port, host, password, user} ;