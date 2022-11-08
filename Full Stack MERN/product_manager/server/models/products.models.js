const mongoose = require('mongoose');

//1.Define SCHEMA_NAME
const productsSchema=mongoose.Schema({
  title:{
    type:String,
    required:[true,"Title is required"]
  },
  price:{
    type:Number,
    min:[0,"Must be a positive number"]
  },
  description:{
    type:String,
    required:[true,"Description is required"]
  }

},{timestaps:true})

//2.Register the Schema
const Products = mongoose.model("Products",productsSchema)

module.exports = Products