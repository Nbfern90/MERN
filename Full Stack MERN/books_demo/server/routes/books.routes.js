const booksController = require('../controllers/books.controller')

module.exports = app => {
  app.get("/api/books/test",booksController.test)
//CREATE
  app.post("/api/books/create",booksController.createBook)
//Read
  app.get("/api/books",booksController.allBooks)
  app.get("/api/books/:id",booksController.oneBook)

  //UPDATE
  app.put("/api/books/:id",booksController.updateBook)
  //DELETE
  app.delete("/api/books/:id",booksController.deleteBook)

}