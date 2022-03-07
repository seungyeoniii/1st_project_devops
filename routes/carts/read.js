'use strict'

//const { ObjectId } = require('bson')
const { readAll, readOne } = require('../../model/cart.js')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    //const user_id = await readOne(this.mongo)
    
    //readAll -> find로 유저id만 검색
    //그 검색값에 status가 false인 값만찾아서 해당 값 추출

    //유저가 아이템을 장바구니에 넣을때, status가 false인 cid값에 post를 하는 형식으로 해야 
    //장바구니에 여러 아이템을 담을 수 있음.

    const user_id = request.query.user_id // query -> ?user_id=
    if(user_id === ""){
      const result_A = await readAll(this.mongo)
      reply
      .code(200)
      .header('content-type', 'application/json')
      .send(
        result_A
      )
    }
    else{
      const result_A = await readAll(this.mongo)
      const user_point = result_A.filter(item => item.user_id == user_id) // user_id 는 함수로 변경 해야함
      const user_status = user_point.filter(item => item.status === false)
        reply
          .code(200)
          .header('content-type', 'application/json')
          .send(
            user_status
      )
    }
  })
}