const jokesController = require("../controllers/jokes.controller")

module.exports = app => {
  app.post("/api/test",jokesController.test),

  //CREATE
app.post("/api/jokes",jokesController.createJoke),
//READ
app.get("/api/jokes",jokesController.allJokes),
app.get("/api/jokes/:joke_id",jokesController.oneJoke),
//UPDATE
app.put("/api/jokes/:joke_id",jokesController.updateJoke),
//DELETE
app.delete("/api/jokes/:joke_id",jokesController.deleteJoke)
}
