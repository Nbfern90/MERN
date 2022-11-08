const booksController = require('../controllers/books.controller')

module.exports = app => {
  app.get("/api/books/test",booksController.test)
}