"use strict"
const response = require('../../../../helpers/WebResponse')
const repo = require('./repository')

async function fetchAll() {
  const data = await repo.fetchAll()
  if(data.error == null) {
    return response(200, 'Get data pegawai successfully', data.res)
  }
  return response(400, 'Get data pegawai unsuccessfully', data.error)
}

module.exports = {
  fetchAll
}