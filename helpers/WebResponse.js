"use strict"

function response(statusCode, message, results) {
  return {
    statusCode: statusCode,
    message: message,
    result: results
  }
}

module.exports = response