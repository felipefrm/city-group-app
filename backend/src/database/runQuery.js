const mysql = require('mysql2/promise');

async function runQuery(query, params = null) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'economapas'
  });

  const [rows] = await connection.execute(query, params);

  return rows
}

module.exports = runQuery
