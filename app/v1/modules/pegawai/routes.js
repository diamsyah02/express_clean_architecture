"use strict"
const AuthMiddleware = require('../../../../helpers/middleware/AuthMiddleware')
const controller = require('./controller')

async function PegawaiRoute(app, prefix) {
  await app.use(`${prefix}/pegawai`, AuthMiddleware)
  await app.route(`${prefix}/pegawai`).get(controller.fetchAll)
  await app.route(`${prefix}/pegawai/:id`).get(controller.fetchDetail)
  await app.route(`${prefix}/pegawai`).post(controller.store)
  await app.route(`${prefix}/pegawai/:id`).post(controller.update)
  await app.route(`${prefix}/pegawai/:id/delete`).get(controller.remove)
}

module.exports = PegawaiRoute