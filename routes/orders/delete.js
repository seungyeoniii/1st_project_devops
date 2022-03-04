'use strict'


module.exports = async function (app, opts) {
  app.delete('/:id', async function (request, reply) {
    reply
    .code(200)
    .header('content-type', 'application/json; charset=utf-8')
    .send("Hello world")

  })
}
