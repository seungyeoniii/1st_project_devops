'use strict'

module.exports = async function (app, opts) {
  app.put('/:user_id', async function (request, reply) {
    
    reply
      .code(200)
      .header('content-type', 'application/json; charset=utf-8')
      .send({
        name: "ab",
        user_id: "aaaa",
        time: "X"
      })
    
  })
}
