const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

// Principais métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, odernação, paginação...)
// Route Params: request.params (Identificação de recursos na alteração/remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
