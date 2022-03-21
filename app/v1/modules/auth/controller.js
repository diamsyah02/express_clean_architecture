"use strict"

const service = require('./service')

const register = async (req, res) => {
  const data = await service.register(req)
  return res.send(data).status(data.statusCode)
}

const login = async (req, res) => {
  const data = await service.login(req)
  return res.send(data).status(data.statusCode)
}

module.exports = {
  register,
  login
}