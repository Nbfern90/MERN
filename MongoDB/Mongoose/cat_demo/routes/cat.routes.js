const catController = require('../controllers/cat.controller')


module.exports = app => {
  app.get("/api/test",catController.test),
  //CREATE
  app.post("/api/cats",catController.createCat),
  //READ
  app.get("/api/cats",catController.allCats),
  app.get("/api/cats/:cat_id",catController.oneCat)
  //UPDATE
  app.put("/api/cats/:cat_id",catController.updateCat)
  //DELETE
  app.delete("/api/cats/:cat_id",catController.deleteCat)

}