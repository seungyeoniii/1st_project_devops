'use strict'

module.exports = async function (app, opts) {
  app.get('/:oid', async function (request, reply) {
    
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send({
        oid: 12
      })
  })

}
