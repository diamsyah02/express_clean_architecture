"use strict"
const repo = require('./repository')

async function fetchAll() {
  const data = await repo.fetchAll()
  if(data.error == null) {
    return {
      statusCode: 200,
      message: 'Get data pegawai successfully',
      result: data.res
    }
  }
  return {
    statusCode: 400,
    message: 'Get data pegawai unsuccessfully',
    result: data.error
  }
}

module.exports = {
  fetchAll
}