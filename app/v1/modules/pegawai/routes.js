"use strict"
const controller = require('./controller')

async function PegawaiRoute(app, groupRoute) {
  await app.route(`${groupRoute}/pegawai`).get(controller.fetchAll)
}

module.exports = PegawaiRoute