import Sensore from 'App/Models/Sensore'
import mongoose, { Schema } from 'mongoose'

export default class SensoresMongoosesController {
  private mongo = mongoose
  async conexcion() {
    try {
      await this.mongo
        .connect('mongodb+srv://root:proyecto@proyecto.1jic6.mongodb.net/proyecto', {
          maxIdleTimeMS: 6000,
        })
        .then((db) => console.log('conectado a' + this.mongo.connection.name))
        .catch((er) => console.log(er))
    } catch (error) {
      return error
    }
  }
  async mostar() {
    const con = mongoose.createConnection(
      'mongodb+srv://root:proyecto@sandbox1.1jic6.mongodb.net/proyecto'
    )
    const preb = con.model('sensores', Sensore)
    const buscar = preb
      .find({})
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    return buscar
  }
}

