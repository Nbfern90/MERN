const Pirates = require('../models/pirates.models')

  module.exports.test = (req,res) => {
    res.json("Mic Check..1..2..")
  }

  //Create 
  module.exports.createPirates = (req, res) => {
    Pirates.create(req.body)
      .then(newPirates => res.json(newPirates))
      .catch(err => res.status(400).json(err))
  }

  //Read
  module.exports.allPirates = (req, res) => {
    Pirates.find()
      .then(allPirates=> res.json(allPirates))
      .catch(err=> res.json(err))
  }

  module.exports.onePirate = (req, res) => {
    const {id} =req.params
    Pirates.findOne({_id:id})
      .then(onePirate => res.json(onePirate))
      .catch(err=> res.json(err))
  }

//Update
  module.exports.updatePirate= (req, res) => {
    const {id} =req.params
    Pirates.findOneAndUpdate({_id:id}, req.body,{new:true,runValidators:true})
      .then(updatePirate => res.json(updatePirate))
      .catch(err=> res.status(400).json(err))
  }

//Delete
  module.exports.deletePirate= (req, res) => {
    const {id} =req.params
    Pirates.deleteOne({_id:id})
      .then(confirmation => res.json(confirmation))
      .catch(err => res.json(err))
  }