'use strict'

const { createOne } = require('../../model/cart.js')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const result = await createOne(this.mongo, request.body)
    console.log("result :", result)

    reply
      .code(201)
      .header('content-type', 'application/json')
      .send(result
        
        //item_id:result.item_id,
        //ok:result.ok
      )
  })
}