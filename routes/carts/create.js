'use strict'

module.exports = async function (app, opts) {
  app.post('/:cid', async function (request, reply) {
    //const result = await createOne(this.mongo, request.body)

    reply
      .code(201)
      .header('content-type', 'application/json')
      .send({
        item_id: 1234,
        ok: 1
        //item_id:result.item_id,
        //ok:result.ok
      })
  })
}