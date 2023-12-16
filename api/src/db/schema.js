const dbPool = require('./connection');

 const schema = async () => {
    let connection;
    try {
    connection = await dbPool.promise().getConnection();
        await connection.query(`
        CREATE TABLE people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL
        );
        `);
        console.log("Tabela 'people' criada com sucesso!");
    } catch (error) {
        console.error("ERROR:", error);
    } finally {
        connection.release();
    }
}

module.exports = schema