const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql2");
const connection = mysql.createConnection(config);

module.exports = connection;
