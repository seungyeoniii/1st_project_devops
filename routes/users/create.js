'use strict'
const { createOne } = require('../../model/user.js')
module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const result = await createOne(this.mongo, request.body)

    reply
      .code(201)
      .header('content-type', 'application/json')
      .send({
        id: result.insertedId.toString()
      })
  })
}
