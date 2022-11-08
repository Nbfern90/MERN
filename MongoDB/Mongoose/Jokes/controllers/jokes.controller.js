const Jokes = require('../models/jokes.models')

module.exports.test = (req,res) => {
  res.json("Testing")
}

//CREATE
module.exports.createJoke = (req,res) => {
  Jokes.create(req.body)
  .then(newJoke=> res.json(newJoke))
  .catch(err =>res.json(err))

}

//READ
module.exports.allJokes = (req,res) => {
  Jokes.find({})
    .then(allJokes=> res.json(allJokes))
    .catch(err => res.json(err))
}

module.exports.oneJoke = (req,res) => {

  const{joke_id} = req.params

  Jokes.find({joke_id})
    .then(oneJoke => res.json(oneJoke))
    .catch(err=>res.json(err))
}

//UPDATE
module.exports.updateJoke = (req,res) => {
  const {joke_id} = req.params
  Jokes.findByIdAndUpdate({_id:joke_id})
    .then(updateJoke=> res.json(res))
    .catch(err =>res.json(err))
}

//Delete 
module.exports.deleteJoke = (req,res) => {
  const {joke_id} = req.params
  Jokes.findOneAndDelete({_id:joke_id})
    .then(res=> res.json(res))
    .catch(err =>res.json(err))
}