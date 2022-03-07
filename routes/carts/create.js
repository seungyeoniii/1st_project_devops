'use strict'

const { createOne, readAll } = require('../../model/cart.js')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    // readAll -> find로 유저id만 검색(위의 cid는 uid로 변경 해줘야함) -> 
    // 그 검색값에 status가 false인 값이 있는 경우 -> 해당 카트 번호와 똑같은 값으로 post함
    // 그 검색값에 status가 ture인 값만 있는 경우 -> find로 제일 높은 카트 번호를 가져옴 -> 해당 번호에 +1 하여 post함
    
    //하단의 item_id와 user_id도 변수값을 만들어 일일히 할당 해줘야함. ( 하드코딩 X )
    //count값도 추가해줘야하는데 어케할지 모르겠음..
    
    const user_id = request.query.user_id // ?user_id = 
    const item_id = request.query.item_id // ?item_id =
    const count = request.query.count // ?count = 
    if(user_id == "" || item_id == "" || count == ""){
      reply
        .code(400)
        .header('content-type', 'application/json')
        .send("NO DATA")
    }
    else{
      const result_A = await readAll(this.mongo)
      const user_point = result_A.filter(item => item.user_id === user_id)
      console.log("asfasfaf : ", user_point[0])
      let cart_check
      if(user_point[0] != undefined){
        cart_check = user_point.filter(item => item.status === false)
      }
      //console.log(cart_check)
      let cart_id = 0
      if(cart_check != null){
        cart_id = cart_check[0].cid
        const appen_request = {
          "cid" : cart_id,
          "item_id": item_id,
          "user_id": user_id,
          "count": count,
          "status": false
        }
        const result = await createOne(this.mongo, appen_request)
        reply
        .code(201)
        .header('content-type', 'application/json')
        .send(result)
      }
      else{
        for(let i = 0; i < result_A.length; i++){
          if(cart_id < result_A[i].cid){
            cart_id = result_A[i].cid
          }
        }
        const appen_request = {
          "cid" : cart_id+1,
          "item_id": item_id,
          "user_id": user_id,
          "count": count,
          "status": false
        }
        const result = await createOne(this.mongo, appen_request)
        reply
        .code(201)
        .header('content-type', 'application/json')
        .send(result)
      }
    } 
  })
}