"use strict"
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const db = require('./configs/db')
require('dotenv').config()

db.connect(function(err){
  if(err) throw err
})

app.use(cors())
app.listen(process.env.PORT)
console.log('RESTful API server started on: ' + process.env.PORT)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)