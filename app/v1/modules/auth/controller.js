"use strict"

const service = require('./service')

async function register(req, res) {
  const data = await service.register(req)
  return res.status(data.statusCode).send(data)
}

async function login(req, res) {
  const data = await service.login(req)
  return res.status(data.statusCode).send(data)
}

module.exports = {
  register,
  login
}