'use strict'
const { readAll, readOne } = require('../../model/order.js')
module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
  })

  app.get('/:oid', async function (request, reply) {
    const result = await readOne(this.mongo, request.params.oid)
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
  })

}
