const express = require("express")
const app = express()

require('dotenv').config()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  
    next();
  });
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const contactRouter = require('./routes/router')

app.use("/api/v1/contact", contactRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})