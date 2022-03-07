'use strict'
const { createOne, readAll } = require('../../model/user.js')
module.exports = async function (app, opts) {
  
  app.post('/', async function (request, reply) {
    const compare = await readAll(this.mongo)
    //const result = await createOne(this.mongo, request.body)
    let email = request.query.email
    let name = request.query.name
    let count = 0
    for (let i=0; i < compare.length; i++){
      console.log(compare[i])
      if(compare[i].user_email == email){
        count++
      }
    }
    if(count == 0){
      const body = {
        "user_email" : email,
        "user_name" : name
      }

      const result = await createOne(this.mongo, body)
      
      reply
        .code(201)
        .header('content-type', 'application/json')
        .send(result)
    }
    else{
      reply
        .code(404)
        .header('content-type', 'application/json')
        .send("already used")
    }

    reply
      .code(201)
      .header('content-type', 'application/json')
      .send({
     //   id: result.insertedId.toString()
      
      })
  })
}

/*readAll로 유저정보 불러오기 -> 생성할 user_email(id값)와 겹치는 값이 있는지 확인
                -> 없으면 createOne -> 유저 email값 반환
                -> 있으면 생성 불가메세지 반환 */