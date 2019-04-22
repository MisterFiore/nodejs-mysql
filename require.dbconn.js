const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'nodejs_user',
    password: 'uqUYfgkUPL4TavWW',
    database: 'nodejs_db'
  });
}