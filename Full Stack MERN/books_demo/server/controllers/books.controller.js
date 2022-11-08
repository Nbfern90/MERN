const Books = require("../models/books.models");

module.exports.test = (req, res) => {
  res.json("Mic Check..1..2..");
};

//CREATE
module.exports.createBook = (req, res) => {
  Books.create(req.body)
    .then((newBook) => res.json(newBook))
    .catch((err) => res.status(400).json(err));
};

//READ
module.exports.allBooks = (req, res) => {
  Books.find()
    .sort({ title: "asc" })
    .then((allBooks) => res.json(allBooks))
    .catch((err) => res.json(err));
};

module.exports.oneBook = (req, res) => {
  const { id } = req.params;
  Books.findOne({ _id: id })
    .then((oneBook) => res.json(oneBook))
    .catch((err) => res.json(err));
};

//UPDATE
module.exports.updateBook = (req, res) => {
  const { id } = req.params;
  Books.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedBook) => res.json(updatedBook))
    .catch((err) => res.status(400).json(err));
};

//DELETE
module.exports.deleteBook = (req, res) => {
  const { id } = req.params;
  Books.deleteOne({ _id: id })
    .then((confirmation) => res.json(confirmation))
    .catch((err) => res.json(err));
};
