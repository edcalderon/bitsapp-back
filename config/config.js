const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.DATABASE_URI)
module.exports = {
	DATABASE_URI: process.env.DATABASE_URI,
	DATABASE_NAME: process.env.DATABASE_NAME
};