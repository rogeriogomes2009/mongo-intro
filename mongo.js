const mongodb = require('mongodb')
const MongoClient = mongodb.mongoClient

MongoClient.connect('localhost:27017/mongo-intro', (err, db => {
  const pessoas = db.collection('pessoas')
  pessoas.insert({
    nome: 'Rogerio Gomes',
    nascimento: '1971-16-08'
  }, (err, res) => {
    console.log(err, res)
  })
}))