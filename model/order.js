const { ObjectId } = require('fastify-mongodb')
const { Int32 } = require('mongodb')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ORDER)
    const result = await collection.find({}).toArray()
    return result
  },
  createOne: async (mongo, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ORDER)

    const result = await collection.insertOne(body)
    return result
  }
  ,
  readOne: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ORDER)
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  readOneCARTS: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_CART)
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },

  readOneUID: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ORDER)
    const result = await collection.findOne({
      user_id: Int32(id)
    })
    return result
  },

  updateOne: async (mongo, id, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ORDER)

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
  },

  updateStatus: async (mongo, id, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_CART)
    console.log('id',id)
    const resultCartAll = await collection.find({}).toArray()
    console.log('resultCartAll',resultCartAll)
    const filterCart = resultCartAll.filter(item => item.cid === id)
    console.log('filterCart',filterCart)
    let result = []
    for(let i = 0; i < filterCart.length; i++){
      result.push(await collection.findOneAndUpdate({
        _id: ObjectId(filterCart[i])
      }, {
        $set: body
      }))
    }
    return result
  },

  deleteOne: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ORDER)

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  }
}
