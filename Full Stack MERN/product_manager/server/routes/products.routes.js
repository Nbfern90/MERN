const productsController = require('../controllers/products.controller')

module.exports = app => {
  app.get("/api/products/test",productsController.test)
  //Create 
  app.post("/api/products",productsController.createProduct)
  //Read
  app.get("/api/products",productsController.allProducts)
  app.get("/api/products/:id",productsController.oneProduct)
  //UPDATE
  app.put("/api/products/:id",productsController.updateProduct)
  //DELETE
  app.delete("/api/products/:id",productsController.deleteProduct)
}