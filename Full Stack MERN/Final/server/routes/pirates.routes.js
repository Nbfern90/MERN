const piratesController = require('../controllers/pirates.controller')

module.exports = app => {
  app.get("/api/pirates/test",piratesController.test)

  //CREATE 
  app.post("/api/pirates/new",piratesController.createPirates)

  //READ
  app.get("/api/pirates",piratesController.allPirates)
  app.get("/api/pirates/:id",piratesController.onePirate)

  //UPDATE
  app.put("/api/pirates/:id",piratesController.updatePirate)

  //DELETE
  app.delete("/api/pirates/:id",piratesController.deletePirate)
}