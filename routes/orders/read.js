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

  app.get('/:oid', async function (request, reply) {
    // console.log(request.params.oid)
    const result = await readOne(this.mongo, request.params.oid)
    console.log(result)
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send(
        {"_id": result._id,
        "oid": result.oid,
        "cart_id": result.cid,
        "time": result.time}  
        )
        
  })

}