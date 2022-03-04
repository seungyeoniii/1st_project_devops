'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/', async function (request, reply) {
    return 'this is an example'
  })
}



// 'use strict'

// const { deleteOne } = require('../../model')

// module.exports = async function (app, opts) {
//   app.delete('/:id', async function (request, reply) {
//     const result = await deleteOne(this.mongo, request.params.id)

//     reply
//       .code(result.value ? 200 : 204)
//       .header('Content-Type', 'application/json; charset=utf-8')
//       .send({
//         value: result.value,
//         ok: result.ok
//       })
//   })
// }
