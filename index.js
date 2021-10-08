"use strict"
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

app.use(cors())
app.listen(process.env.PORT)
console.log('RESTful API server started on: ' + process.env.PORT)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)