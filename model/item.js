const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ITEM)
    const result = await collection.find({}).toArray()
    return result
  },

  readOne: async (mongo, id) => {
    const collection = mongo.db.collection(process.env.COLLECTION_ITEM)
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  }

}
