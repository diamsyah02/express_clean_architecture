"use strict"

const AuthMiddleware = require('../../../../helpers/middleware/AuthMiddleware')
const controller = require('./controller')

async function PegawaiRoute(app) {
  await app.use(`${process.env.V1}/pegawai`, AuthMiddleware)
  await app.route(`${process.env.V1}/pegawai`).get(controller.fetchAll)
  await app.route(`${process.env.V1}/pegawai/:id`).get(controller.fetchDetail)
  await app.route(`${process.env.V1}/pegawai`).post(controller.store)
  await app.route(`${process.env.V1}/pegawai/:id`).post(controller.update)
  await app.route(`${process.env.V1}/pegawai/:id/delete`).get(controller.remove)
}

module.exports = PegawaiRoute