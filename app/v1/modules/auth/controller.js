"use strict"

const service = require('./service')

const register = async (req, res) => {
  const data = await service.register(req)
  return res.status(data.statusCode).send(data)
}

const login = async (req, res) => {
  const data = await service.login(req)
  return res.status(data.statusCode).send(data)
}

module.exports = {
  register,
  login
}