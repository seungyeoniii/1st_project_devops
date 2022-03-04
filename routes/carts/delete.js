'use strict'

module.exports = async function (app, opts) {
  app.delete('/:cid', async function (request, reply) {
    //const result = await deleteOne(this.mongo, request.params.id)

    reply
      .code(200)
      .header('content-type', 'application/json')
      .send({
        item_id: 1234,
        ok: 1
        // item_id:result.item_id
        // ok:result.ok
      })
  })
}
