"use strict"
const AuthMiddleware = require('../../../../helpers/middleware/AuthMiddleware')
const controller = require('./controller')

async function PegawaiRoute(app, prefix) {
  await app.route(`${prefix}/pegawai`).get(AuthMiddleware, controller.fetchAll)
  await app.route(`${prefix}/pegawai/:id`).get(AuthMiddleware, controller.fetchDetail)
  await app.route(`${prefix}/pegawai`).post(AuthMiddleware, controller.store)
  await app.route(`${prefix}/pegawai/:id`).post(AuthMiddleware, controller.update)
  await app.route(`${prefix}/pegawai/:id/delete`).get(AuthMiddleware, controller.remove)

}

module.exports = PegawaiRoute