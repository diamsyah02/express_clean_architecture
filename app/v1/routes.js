"use strict"
const PegawaiRoute = require('./modules/pegawai/routes')
const groupRoute = '/api/v1'

async function RouteV1(app) {
  await PegawaiRoute(app, groupRoute)
}

module.exports = RouteV1