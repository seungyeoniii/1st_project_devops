const { ObjectId } = require('fastify-mongodb')

module.exports = {
  createOne: async (mongo, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_USER)

    const result = await collection.insertOne(body)
    return result
  },
  readOne: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_USER)
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },
  
  readAll: async (mongo) => {
    const collection = mongo.db.collection(process.env.COLLECTION_USER)
    const result = await collection.find({}).toArray()
    return result
  }

  
}
