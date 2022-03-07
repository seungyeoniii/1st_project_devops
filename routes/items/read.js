'use strict'

const { readAll, readOne } = require('../../model/item.js')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    
    //console.log(request.query.name)
    let name = request.query.name;
    console.log(name)
    if(name === ""){
      const result = await readAll(this.mongo)
        reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(result)
    }
    else{
      const result = await readAll(this.mongo)
      const co = {};
      let a = 0
      for(let i = 0; i < result.length; i++){
        if(result[i].name.search(name) == -1){
          co[i] = 0;
        }
        else{
          co[i] = 1;
        }
        a++;
      }
      let count = 0
      const list = {}
      for(let i = 0; i < a; i++){
        if(co[i] == 1){
          list[count] = result[i]
          count++
        }
      }
        reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(list)
    }
  })
  
    /*
  app.get('/:id', async function (request, reply){
    const result = await readOne(this.mongo, request.params.id)
    
    console.log("aaaa:",result)

    ()


    reply
      .code(200)
      .header('Content-Type', 'application/json; charset-utf-8')
      .send(result)
  })*/
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

