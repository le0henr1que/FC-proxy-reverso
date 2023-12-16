const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10, 
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
});

module.exports = pool;