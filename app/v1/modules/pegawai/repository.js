"use strict"

const ExecuteQuery = require("../../../../helpers/ExecuteQuery")

const table = 'pegawai'

async function fetchAll() {
  const sql = `SELECT * FROM ${table}`
  return ExecuteQuery(sql)
}

module.exports = {
  fetchAll
}