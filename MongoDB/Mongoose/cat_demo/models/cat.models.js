const mongoose = require('mongoose')


//1.DEFINE THE SCHEMA
const catSchema= new mongoose.Schema({
  name : {
    type: String,
    required: [true,"Cat name required"]

  },
  type : {
    type: String,
    required: [true,"Type required"],
  },
  age: {
    type: Number,
    required: [true,"Age required"],
    min: [0,"Age must be positive"],
  },
  fixed: {
    type: Boolean,
    required: [true,"Yes/No?"]
  },
  color: {
    type: String,
    required: [true,"Color required"],
  }

},{timestamps:true})//handles created/update at

//2.REGISTERING THE Schema
const Cat =mongoose.model("Cat",catSchema)

module.exports = Cat