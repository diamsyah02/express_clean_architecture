"use strict"

require('module-alias/register')
require('./pathAlias')
require('dotenv').config()
const express = require('express')
const cluster = require('cluster')
const bodyParser = require('body-parser')
const cors = require('cors')
const cCPUs = require('os').cpus().length
const app = express()
const routes = require('./routes')

if (cluster.isMaster) {
  // Create a worker for each CPU
  for (let i = 0; i < cCPUs; i++) {
    cluster.fork();
  }
  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.process.pid + ' is online.');
  });
  cluster.on('exit', function (worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died.');
  });
} else {
  app.use(cors())
  app.listen(process.env.PORT)
  console.log('RESTful API server started on: ' + process.env.PORT)
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  routes(app)
}