const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/cats_db",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => console.log("We are connected to the database"
    ))
    .catch(err => console.log("Something went wrong when connecting to the database", err))
