'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    return 'this is an example'
  })
}



// //
// 'use strict'

// const { createOne } = require('../../model')

// module.exports = async function (app, opts) {
//   app.post('/', async function (request, reply) {
//     const result = await createOne(this.mongo, request.body)

//     reply
//       .code(201)
//       .header('Content-Type', 'application/json; charset=utf-8')
//       .send({
//         id: result.insertedId.toString()
//       })
//   })
// }

