"use strict"

const AuthRoute = require('./modules/auth/routes')
const PegawaiRoute = require('./modules/pegawai/routes')

async function RouteV1(app) {
  await AuthRoute(app)
  await PegawaiRoute(app)
}

module.exports = RouteV1