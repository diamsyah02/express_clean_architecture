"use strict"

const jwt = require('jsonwebtoken')
const response = require('../WebResponse')
require('dotenv').config()

async function AuthMiddleware(req, res, next){
    const token = (req.headers['authorization'] != undefined) ? req.headers['authorization'].substr(7) : null
    if(token){
        jwt.verify(token, process.env.KEY, (err, decoded) => {
            if(err){
                return res.status(401).send(response(401, 'Token is not valid !', null))
            }else{
                next()
            }
        })
    }else{
        return res.status(401).send(response(401, 'Token is not supplied !', null))
    }
}

module.exports = AuthMiddleware