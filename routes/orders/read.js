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

  app.get('/:_id', async function (request, reply) {
    const result = await readOne(this.mongo, request.params._id)
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
  })

}