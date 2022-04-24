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

//PUT crear un endpoint que se ecargue de actualizar un explorer
app.put("/v1/explorers/:id", (req, res) => {
  console.log(`Api explorers PUT request ${new Date()}`);
  console.log(`Update explorer with id ${req.params.id}`);
  const requestBody = req.body; //parámetros del cliente
  res.status(200).json({ message: "Update!" });
});

//DELETE crear un endpoint para eliminar un explorer
app.delete("/v1/explorers/:id", (req, res) => {
  console.log(`Api Ecplorers DELETE request ${new Date()}`);
  console.log(`Delte explorer with id ${req.params.id}`);
  const requestBody = req.body; //Parámetros de un cliente
  res.status(200).json({ message: "Delete" });
});

// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
