//1.IMPORT EXPRESS AND CREATE AN INSTANCE OF EXPRESSS SERVER
const express = require('express');
const cors = require('cors');
const app = express();
const port =8000;

//1.5 CONNECT MONGOOSE TO MONGODB
require("./config/mongoose.config");

//2.CONFIGURATION FOR YOUR EXPRESS SERVER
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//3.DEFINE ROUTES FOR YOUR EXPRESS SERVER
const booksRoutes = require('./routes/books.routes')
booksRoutes(app)

//4 RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log("EXPRESS SERVER RUNNING ON PORT: " + port))