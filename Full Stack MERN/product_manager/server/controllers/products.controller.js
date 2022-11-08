const Products = require('../models/products.models')


  module.exports.test = (req,res) => {
    res.json("Mic Check..1..2..")
  }

  //Create
  module.exports.createProduct = (req, res) => {
    Products.create(req.body)
      .then(newProdcut=> res.json(newProdcut))
      .catch(err=> res.status(400).json(err))
  }

  //Read
  module.exports.allProducts = (req, res) => {
    Products.find()
      .then(allProducts=> res.json(allProducts))
      .catch(err => res.json(err))
  }

  module.exports.oneProduct=(req, res) =>{
    const{id}=req.params
    Products.findOne({_id:id})
      .then(oneProduct=>res.json(oneProduct))
      .catch(err=> res.json(err))
  }

  //UPDATE
  module.exports.updateProduct = (req, res) =>{
    const {id} =req.params
    Products.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true})
      .then(updateProduct=> res.json(updateProduct))
      .catch(err=> res.status(400).json(err))
  }

  //DELETE
  module.exports.deleteProduct = (req, res) =>{
    const{id}=req.params
    Products.findOneAndDelete({_id:id})
      .then(confirmation => res.json(confirmation))
      .catch(err=> res.json(err))
  }
