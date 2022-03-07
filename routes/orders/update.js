'use strict'

const { updateOne, readOneUID, readOneCARTS } = require('../../model/order.js')

// 주문 내역 취소
module.exports = async function (app, opts) {
  app.put('/:_id', async function (request, reply) {
    // console.log("====request=====\n", request.params)
    // const cancelTime = {
    //   "_id": "6221be70f1438316ab4ec5d8",
    //   "oid": 5501,
    //   "cart_id": 711,
    //   "time": "9998-12-31T15:00:00.000Z"
    // } //new Date(9998,12,31)
    // //const cartResult = await readOneCARTS(this.mongo, request.params.user_id)
    // //console.log("====cidResult=====\n", cartResult.cid)

    // console.log()
    // const result = await updateOne(this.mongo, request.params.id, cancelTime) //cartResult.cid
    // console.log("====result=====\n", result)
    // const readResult = await readOneUID(this.mongo, oidResult.cid)
    //The status value of CARTS table will also be updated to 'false'. 

    reply
      .code(200)
      .header('content-type', 'application/json; charset=utf-8')
      .send({
        name: "ab",
        user_id: "aaaa",
        time: "X",
        cart_status: false
      })
    
  })
}

