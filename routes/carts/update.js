'use strict'

module.exports = async function (fastify, opts) {
  fastify.update('/', async function (request, reply) {
    return 'this is an example'
  })
}