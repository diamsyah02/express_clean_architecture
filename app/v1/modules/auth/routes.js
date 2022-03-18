"use strict"

const controller = require('./controller')

async function AuthRoute(app) {
  await app.route(`${process.env.V1}/register`).post(controller.register)
  await app.route(`${process.env.V1}/login`).post(controller.login)
}

module.exports = AuthRoute