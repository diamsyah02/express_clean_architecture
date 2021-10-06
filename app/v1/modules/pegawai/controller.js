"use strict"

const service = require('./service')

async function fetchAll(req, res) {
  const data = await service.fetchAll()
  res.status(data.statusCode).send(data)
}

module.exports = {
  fetchAll
}