'use strict'

const { createOne, updateStatus } = require('../../model/order.js')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    
    const cart_id = Number(request.query.cart_id)
    const newBody = {
      cart_id: cart_id,
      time : new Date()
    }
    
    const result = await createOne(this.mongo, newBody) // orders 에 새로운 정보 추가.
    const newStatus = await updateStatus(this.mongo, cart_id, {status: true})
    // console.log("------result-----\n", result)
    // console.log("-----newStatus-----\n", newStatus)

    if(!result){
      reply
      .code(404)
      .header('content-type', 'application/json; charset=utf-8')
      .send({error: 'Not found'})
    }
    else{
      reply
      .code(201)
      .header('content-type', 'application/json; charset=utf-8')
      .send({newStatus: newStatus, status:'OK'})
    }
    
  })
}
