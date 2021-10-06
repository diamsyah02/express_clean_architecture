"use strict"
const repo = require('./repository')

async function fetchAll() {
  const data = await repo.fetchAll()
  if(data.error == null) {
    return data.res
  }
  return data.error
}

module.exports = {
  fetchAll
}