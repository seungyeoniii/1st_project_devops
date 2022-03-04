'use strict'

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    //const result = await createOne(this.mongo, request.body)

    reply
      .code(201)
      .header('content-type', 'application/json')
      .send({
        id: 1234,
        ok: 1
        //id:result.id,
        //ok:result.ok
      })
  })
}