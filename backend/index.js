const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-y65qs.mongodb.net/omnistack10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

// Principais métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, odernação, paginação...)
// Route Params: request.params (Identificação de recursos na alteração/remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.get("/", (request, response) => {
  return response.json({ message: "Hello Omnistack" });
});

app.listen(3333);
