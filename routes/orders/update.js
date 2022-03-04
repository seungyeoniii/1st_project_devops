'use strict'

module.exports = async function (fastify, opts) {
  fastify.update('/', async function (request, reply) {
    return 'this is an example'
  })
}


/*
'use strict'

const { updateOne, readOne } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const result = await updateOne(this.mongo, request.params.id, request.body) // 업데이트 완료, result는 변경 전 데이터
    const readResult = await readOne(this.mongo, request.params.id) // 변경 후 데이터

    reply
      .code(200)
      .header('content-type', 'application/json')
      .send({
        value: readResult,
        ok: result.ok // 1
      })

    /*
    // 또다른 방법: 요청에 전달한 payload를 조합하는 방식
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        value: { ...result.value, ...request.body },
        ok: result.ok
      })
    
  })
}
*/