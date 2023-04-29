const postgres = require('postgres');
const env = process.env;

const sql = postgres({
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASSWORD
})

module.exports = sql;