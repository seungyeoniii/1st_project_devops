'use strict'
const { readAll, readOne } = require('../../model/user.js')


module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)
       
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(result)
      })

  app.get('/:id', async function (request, reply) {
    const result = await readOne(this.mongo, request.params.id)

    
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(result)
   
    })
  }

    



               
               /*
               function findUserByToken(token){
return user.find (u => u.token ===token)}

               
const user = findUserByToken(totken)

if(user) {

const cart = this.mongo.db.collection(’cart’)

const result = await cart.find({

userId : user.id}).toArray()

else{

if(token){reply. code(401){ 잘못된 토큰입니다}

}//토큰이 있는데 사람을 못찾은 경우

else{ // 토큰을 안 남긴 경우
(로그인)
readAll로 유저정보 불러오기 -> 작성한 id값과 readAll한 값중 일치하는 값이 있는지 확인
                -> 없으면 id가 없는메세지 반환
                -> 있으면 password도 일치하는지 확인
                    -> 일치하면 로그인처리
                    -> 일치하지 않으면 일치하지 않는다는 메세지 반환



                */
               
               
               
                