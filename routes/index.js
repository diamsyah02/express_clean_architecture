"use strict"
const RouteV1 = require('../app/v1/routes')
const response = require('../helpers/WebResponse')

const routes = async function (app) {
    await app.route('/').get(function (req, res) {
        res.status(200).send(response(200, 'Clean architecture express js', null))
    });

    await RouteV1(app)
}

module.exports = routes