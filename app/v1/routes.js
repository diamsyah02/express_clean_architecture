"use strict"
const AuthRoute = require('./modules/auth/routes')
const PegawaiRoute = require('./modules/pegawai/routes')
const prefix = '/api/v1'

async function RouteV1(app) {
  await AuthRoute(app, prefix)
  await PegawaiRoute(app, prefix)
}

module.exports = RouteV1