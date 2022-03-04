'use strict'

module.exports = async function (app, opts) {
  app.post('/:cart_id', async function (request, reply) {
      reply
      .code(201)
      .header('content-type', 'application/json; charset=utf-8')
      .send({
        oid: 12
      })
    
  })
}
