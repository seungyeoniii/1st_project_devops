'use strict'

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    //const result = await readAll(this.mongo)
    
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send([{
        pid: 1234,
        name: "item1",
        price: 3000
        },
        {
        pid: 1235,
        name: "item2",
        price: 4000
        },
        {
        pid: 1236,
        name: "item3",
        price: 5000
        }])
      })
    
  app.get('/:id', async function (request, reply) {
    //const result = await readOne(this.mongo, request.params.id)
    
       reply
          .code(200)
         .header('Content-Type', 'application/json; charset=utf-8')
         .send({
          pid: 1234,
          name: "item1",
          price: 3000
          })
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

