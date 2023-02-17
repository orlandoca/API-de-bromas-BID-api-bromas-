const JokesController = require("../controllers/jokes_controller");

module.exports = (app) => {
  app.get("/api/jokes", JokesController.findAllJokes);
  app.get("/api/jokes/:id", JokesController.findOneSingleJoker);
  app.get("/api/jokes/random", JokesController.findRandomSingleJoker);
  app.post("/api/jokes/new", JokesController.createNewJoker);
  app.put("/api/jokes/update/:id", JokesController.updateExistingJokes);
  app.put("/api/jokes/delete/:id", JokesController.deleteExistingJokes);
};
