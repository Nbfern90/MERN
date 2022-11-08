const mongoose = require('mongoose')


//1.Define the Schema 
const PiratesSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true,"Name must be provided"]
  },
  image:{
    type: String,
    required: [true,"Image must be provided"]
  },
  chests:{
    type: Number,
    min: [0,"# of Chests is required"]
  },
  phrase:{
    type: String,
    required: [true,"Catch Phrase must be provided"]
  },
  position:{
    type: String,
    required: [true,"Position must be provided"]
  },
  pegleg:{
    type: String,
    required: [true,"Peg Leg must be provided"]
  },
  eyepatch:{ 
    type:String,
  required: [true,"Eyepatch must be provided"]
  },
  hook:{
    type:String,
    required: [true,"Hook must be provided"]

  }

},{timestamps:true})


//Register the Schema
const Pirates = mongoose.model("Pirates",PiratesSchema)

module.exports = Pirates