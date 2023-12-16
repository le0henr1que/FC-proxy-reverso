const dbPool = require("./connection");


const seeds = async () => {
 
 let connection;
  try {
   connection = await dbPool.promise().getConnection();
   await connection.query(`
      INSERT INTO people (nome) VALUES ('Leonardo');
   `);

   await connection.query(`
      INSERT INTO people (nome) VALUES ('Danilo');
   `);

   await connection.query(`
      INSERT INTO people (nome) VALUES ('João');
   `);
    console.log("Dados inseridos com sucesso!");

  } catch (error) {
    console.error("ERROR:", error);
  } finally {
    connection.release();
  }
}

module.exports = seeds

