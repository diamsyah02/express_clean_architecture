"use strict"

const db = require('../../../../configs/db')
const table = 'pegawai'

const fetchAll = async () => {
  const data = await db.select().table(table)
  return data
}
const fetchDetail = async (req) => {
  const { id } = req.params
  const data = await db(table).where('id', id)
  return data
}

const store = async (req) => {
  const { nama, alamat, telepon } = req.body
  const store = await db(table).insert({nama: nama, alamat: alamat, telepon: telepon})
  return store
}

const update = async (req) => {
  const { nama, alamat, telepon } = req.body
  const { id } = req.params
  const update = await db(table).where('id', id).update({nama: nama, alamat: alamat, telepon: telepon})
  return update
}

const remove = async (req) => {
  const { id } = req.params
  const remove = await db(table).where('id', id).del()
  return remove
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}