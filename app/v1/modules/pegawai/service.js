"use strict"
const repo = require('./repository')

async function fetchAll() {
  const data = await repo.fetchAll()
  if(data != null) {
    return data
  }
  return []
}

module.exports = {
  fetchAll
}