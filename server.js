const express = require("express");
const app = express();
require("./config/mongoose.config");

const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const colorRoutes = require("./routes/jokes_routes"); // Incluir modulo de rutas
colorRoutes(app); //Instancia de modulo de rutas

// esto tiene que estar debajo de los otros bloques de código
app.listen(port, () => console.log(`Listening on port: ${port}`));
