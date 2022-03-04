'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}

//'use strict'

// const { readAll, readOne } = require('../../model')
// const FILL_ME_IN = 'FILL_ME_IN'

// module.exports = async function (app, opts) {
//   app.get('/', async function (request, reply) {
//     const result = await readAll(this.mongo)

//     reply
//       .code(200)
//       .header('Content-Type', 'application/json; charset=utf-8')
//       .send(result)
//   })

//   app.get('/:id', async function (request, reply) {
//     const result = await readOne(this.mongo, request.params.id)

//     reply
//       .code(200)
//       .header('Content-Type', 'application/json; charset=utf-8')
//       .send(result)
//   })
// }
