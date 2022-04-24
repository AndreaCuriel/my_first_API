// Usando objeto express
const express = require("express");
// App de Express
const app = express();
app.use(express.json()); // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//HTTP Methods
//GET
app.get("/v1/explorers", (req, res) => {
  console.log(`Api Explorers GET ALL requests ${new Date()}`);
  const explorer1 = { id: 1, name: "Andrea1" };
  const explorer2 = { id: 2, name: "Andrea2" };
  const explorer3 = { id: 3, name: "Andrea3" };
  const explorer4 = { id: 4, name: "Andrea4" };
  const explorers = [explorer1, explorer2, explorer3, explorer4];
  res.status(200).json(explorers);
});

//Get, crear un endpoint que te regrese un explorer mediando un ID
app.get("/v1/explorers/:id", (req, res) => {
  console.log(`Api Explorers GET request ${new Date()}`);
  console.log(`Getting explorer with id ${req.params.id}`);
  const explorer = { id: 1, name: "Andrea" };
  res.status(200).json(explorer);
});

//POST Crear un endpoint que se encargue de crear un explorer
app.post("/v1/explorers", (req, res) => {
  console.log(`Api Explorers POST request ${new Date()}`);
  const requestBody = req.body; //Párametos de un cliente
  res.status(201).json({ message: "Created" });
});

// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
