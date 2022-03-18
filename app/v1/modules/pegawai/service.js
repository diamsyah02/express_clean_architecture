"use strict"

const response = require('../../../../helpers/WebResponse')
const repo = require('./repository')

const fetchAll = async () => {
  const data = await repo.fetchAll()
  return response(200, 'Get data pegawai successfully', data)
}
const fetchDetail = async (req) => {
  const data = await repo.fetchDetail(req)
  return response(200, `Get data pegawai with id = ${req.params.id} successfully`, data[0])
}

const store = async (req) => {
  const data = await repo.store(req)
  return response(200, 'Insert data pegawai successfully', data)
}

const update = async (req) => {
  const data = await repo.update(req)
  return response(200, `Update data pegawai with id = ${req.params.id}`, data)
}

const remove = async (req) => {
  const data = await repo.remove(req)
  return response(200, `Delete data pegawai with id = ${req.params.id}`, data)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}