'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}


// 'use strict'

// module.exports = async function (app, opts) {
//   app.register(require('./create'))
//   app.register(require('./read'))
//   app.register(require('./update'))
//   app.register(require('./delete'))
// }
