const connection = require("./connection");

connection.query(`
   INSERT INTO people (nome) VALUES ('Leonardo');
`);

connection.query(`
   INSERT INTO people (nome) VALUES ('Danilo');
`);

connection.query(`
   INSERT INTO people (nome) VALUES ('João');
`);
