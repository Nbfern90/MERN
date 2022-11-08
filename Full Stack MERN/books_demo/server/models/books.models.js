const mongoose = require('mongoose')

//1.Define the Schema
const BookSchema =mongoose.Schema({
  title:{
    type: String,
    required: [true,"Title must be provided"]
  },
  pages: {
    type: Number,
    min: [0,"You can't have negative pages"]
  },
  author: {
    type: String,
    required: [true,"Author must be provided"]
  }

},{timestamps:true})

//Register the SCHEMA
const Books = mongoose.model("Books",BookSchema)

module.exports = Books

