'use strict'

const { readAll, readOne } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)
    console.log("result :", result)
  
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(
        result
      )
  })
}