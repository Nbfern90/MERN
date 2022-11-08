const mongoose = require('mongoose')

//1.Define the SCHEMA
const jokeSchema = mongoose.Schema({
  setup : {
    type: String,
    required:[true,"Needs a setup"]
  },
  punchline:{
    type: String,
    required:[true,"Needs a punchline"]
  }
},{timestaps:true})

//2. REGISTERING THE SCHEMA 
const Jokes =mongoose.model("Jokes",jokeSchema)

module.exports = Jokes