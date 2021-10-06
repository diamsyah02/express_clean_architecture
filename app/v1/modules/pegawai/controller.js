"use strict"
const response = require('../../../../helpers/WebResponse')
const service = require('./service')

async function fetchAll(req, res) {
  const data = await service.fetchAll()
  res.status(data.statusCode).send(response(data.statusCode, data.message, data.result))
}

module.exports = {
  fetchAll
}