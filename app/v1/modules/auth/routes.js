"use strict"

const controller = require('./controller')

async function AuthRoute(app, prefix) {
  await app.route(`${prefix}/register`).post(controller.register)
  await app.route(`${prefix}/login`).post(controller.login)
}

module.exports = AuthRoute