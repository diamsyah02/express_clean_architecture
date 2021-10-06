"use strict"
const response = require('../../../../helpers/WebResponse')
const service = require('./service')

async function fetchAll(req, res) {
  const data = await service.fetchAll()
  res.status(200).send(response(200, 'Get data pegawai successfully', data))
}

module.exports = {
  fetchAll
}