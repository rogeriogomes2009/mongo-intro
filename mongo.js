const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://localhost:27017/mongo-intro', (err, db) => {
  const pessoas = db.collection('pessoas')
  pessoas.insert({
    nome: 'Marcos Gomes',
    nascimento: '1971-16-08'
  }, (err, res) => {
    console.log(err, res)
  })
  const cursorPessoas = pessoas.find({})
  cursorPessoas.forEach ( doc => {
    console.log(doc)
  }, () => console.log('Fim'))

  /*pessoas.update({
    _id: mongodb.ObjectId('61f1cabf26529134acb4c8db')
  },
  {
    $set:{
      nome: 'Marcos Rogerio da Silva Gomes',
      nascimento: '16-08-1971'
    }
  }, (err, res) => console.log(err))*/
  /*pessoas.remove({
    _id: mongodb.ObjectId('61f1d73fcb17ab37cc2ec610')
  },
  (err, res) => console.log(err))*/
})