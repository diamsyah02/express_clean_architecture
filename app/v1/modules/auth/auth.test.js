"use strict"

const { register, login } = require('./controller')
const db = require('@configs/db')

describe('Test Auth Controller', function () {
  test('Function Register', async () => {
    const req = {
      body: {
        username: 'Test',
        password: 'Test'
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await register(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Login', async () => {
    const req = {
      body: {
        username: 'Test',
        password: 'Test'
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await login(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  afterAll(async () => {
    await db.destroy()
  })
})