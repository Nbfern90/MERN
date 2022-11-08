const Cat = require("../models/cat.models")


module.exports.test = (req,res) => {
  res.json("Testing")
}

//CREATE
module.exports.createCat = (req, res) => {
  Cat.create(req.body)
    .then(newCat => res.json(newCat))
    .catch(err => res.json(err))
}

//READ
module.exports.allCats = (req, res) =>{
  Cat.find({})
    .then(allCats => res.json(allCats))
    .catch(err => res.json(err))
}

module.exports.oneCat = (req, res) =>{

  const{cat_id} = req.params

  Cat.find({_id:cat_id})
    .then(oneCat => res.json(oneCat))
    .catch(err => res.json(err))
}


//UPDATE
module.exports.updateCat = (req, res) =>{
  const {cat_id} = req.params
  Cat.findByIdAndUpdate({_id:cat_id}, req.body,{new:true})
    .then(updateCat => res.json(updateCat))
    .catch(err => res.json(err))
}

//DELETE
module.exports.deleteCat = (req, res) =>{
  const {cat_id} = req.params
  Cat.findOneAndDelete({_id:cat_id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
}