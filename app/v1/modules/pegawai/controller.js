"use strict"

const service = require('./service')

async function fetchAll(req, res) {
  const data = await service.fetchAll()
  res.status(data.statusCode).send(data)
}
async function fetchDetail(req, res) {
  const data = await service.fetchDetail(req)
  res.status(data.statusCode).send(data)
}

async function store(req, res) {
  const data = await service.store(req)
  res.status(data.statusCode).send(send)
}

async function update(req, res) {
  const data = await service.update(req)
  res.status(data.statusCode).send(send)
}

async function remove(req, res) {
  const data = await service.remove(req)
  res.status(data.statusCode).send(send)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}