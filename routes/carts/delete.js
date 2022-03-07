'use strict'

const { deleteOne } = require('../../model/cart.js')

module.exports = async function (app, opts) {
  app.delete('/:cid', async function (request, reply) {
    const result = await deleteOne(this.mongo, request.params.cid)
    if(result.value == null){
      console.log("no data")
      reply
        .code(204)
        .header('content-type', 'application/json')
        .send(
          result.value
        )
      }
    else{
        console.log("result : ", result)
        reply
        .code(200)
        .header('content-type', 'application/json')
        .send(
          result.value
        )
      }
  })
}
