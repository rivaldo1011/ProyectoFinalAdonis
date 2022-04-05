import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Historial from 'App/Models/Historial'
import mongoose, { Schema } from 'mongoose'

export default class HistorialMongoosesController {
  private mongo = mongoose
  async conexcion() {
    try {
      await this.mongo
        .connect('mongodb+srv://root:ZXCVzxcv1234@sandbox1.1jic6.mongodb.net/proyecto', {  
        maxIdleTimeMS: 6000,
        })
        .then((db) => console.log('conectado a ' + this.mongo.connection.name))
        .catch((er) => console.log(er))
    } catch (error) {
      return error
    }
  }
  async mostar() {
    const con = mongoose.createConnection(
      'mongodb+srv://root:ZXCVzxcv1234@sandbox1.1jic6.mongodb.net/proyecto'
    )
    const preb = con.model('historial', Historial)
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
