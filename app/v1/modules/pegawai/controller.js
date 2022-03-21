"use strict"

const service = require('./service')

const fetchAll = async (req, res) => {
  const data = await service.fetchAll()
  res.send(data).status(data.statusCode)
}
const fetchDetail = async (req, res) => {
  const data = await service.fetchDetail(req)
  res.send(data).status(data.statusCode)
}

const store = async (req, res) => {
  const data = await service.store(req)
  res.send(data).status(data.statusCode)
}

const update = async (req, res) => {
  const data = await service.update(req)
  res.send(data).status(data.statusCode)
}

const remove = async (req, res) => {
  const data = await service.remove(req)
  res.send(data).status(data.statusCode)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}