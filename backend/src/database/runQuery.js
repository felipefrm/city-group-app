const mysql = require('mysql2/promise');
require('dotenv').config();

async function runQuery(query, params = null) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  });

  const [rows] = await connection.execute(query, params);

  await connection.end()

  return rows
}

module.exports = runQuery
