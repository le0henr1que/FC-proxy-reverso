const connection = require("./connection");

connection.query(`
    CREATE TABLE people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
    );
`);
