const express = require("express");
const dbPool = require("./db/connection");
const schema = require("./db/schema")
const seeds = require("./db/seeds")

const app = express();
const PORT = 3003;

app.use(express.json());

schema()
seeds()

app.get("/", async (request, response) => {
  let connection;

  try {
    connection = await dbPool.promise().getConnection();

    const users = await connection.query("SELECT * FROM people");
 
    const htmlContent = `
      <html>
        <body>
          <h1>Full Cycle Rocks!</h1>
          <ul>${users[0].map(user => `
            <li>${user.nome}</li>`).join('')}
          </ul>
        </body>
      </html>`;

    response.setHeader('Content-Type', 'text/html');
    response.send(htmlContent);
   
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Internal Server Error");
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});