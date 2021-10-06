"use strict"
const db = require('../../../../configs/db')
const table = 'pegawai'

async function fetchAll() {
  const sql = `SELECT * FROM ${table}`
  const data = await new Promise((resolve) =>
    db.query(sql, function (error, res) {
      if (error) {
        return {
          error: error,
          res: null
        }
      }
      return resolve({
        error: null,
        res: res
      })
    })
  );
  return data
}

module.exports = {
  fetchAll
}