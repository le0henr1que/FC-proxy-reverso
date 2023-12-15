const express = require("express");
const connection = require("./db/connection");
const app = express();
const PORT = 3003;

app.get("/", async (request, response) => {
  try {
    const users = await connection.query("SELECT * FROM people");
    response.send(users);
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});
