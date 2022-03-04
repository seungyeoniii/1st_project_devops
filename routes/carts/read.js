'use strict'

module.exports = async function (app, opts) {
  app.get('/:cid', async function (request, reply) {
    //const result = await readAll(this.mongo)
    //console.log("result :", result)
    
    reply
      .code(200)
      .header('content-type', 'application/json')
      .send({
        cid:10
      })
  })
}