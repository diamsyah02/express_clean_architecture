"use strict"

const service = require('./service')

const fetchAll = async (req, res) => {
  const data = await service.fetchAll()
  res.status(data.statusCode).send(data)
}
const fetchDetail = async (req, res) => {
  const data = await service.fetchDetail(req)
  res.status(data.statusCode).send(data)
}

const store = async (req, res) => {
  const data = await service.store(req)
  res.status(data.statusCode).send(data)
}

const update = async (req, res) => {
  const data = await service.update(req)
  res.status(data.statusCode).send(data)
}

const remove = async (req, res) => {
  const data = await service.remove(req)
  res.status(data.statusCode).send(data)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}