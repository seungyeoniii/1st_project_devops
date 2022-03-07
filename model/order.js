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
      oid: Int32(id)
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
      _id: ObjectId(id) //cid: Int32(id)
    }, {
      $set: body
    })
    return result
  },

  updateStatus: async (mongo, id, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_CART)

    const result = await collection.findOneAndUpdate({
      cid: Int32(id)
    }, {
      $set: body
    })
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
