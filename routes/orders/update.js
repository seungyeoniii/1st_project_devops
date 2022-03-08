'use strict'

const { updateOne, readOneId } = require('../../model/order.js')

// 주문 내역 취소
module.exports = async function (app, opts) {
  app.put('/:_id', async function (request, reply) {
    console.log("====request=====\n", request.params._id)
    const result = await updateOne(this.mongo, request.params._id, {time: new Date(9998,12,31)})
    const timeResult = await readOneId(this.mongo,request.params._id)
    
    if(!result){
      reply
        .code(404)
        .header('content-type', 'application/json; charset=utf-8')
        .send({error : "Not Found"})
    }
    else{
      reply
      .code(200)
      .header('content-type', 'application/json; charset=utf-8')
      .send({_id: result.value._id,
              oid: result.value.oid,
              cart_id: result.value.cart_id,
              time: timeResult.time})
    }
    
  })
}

