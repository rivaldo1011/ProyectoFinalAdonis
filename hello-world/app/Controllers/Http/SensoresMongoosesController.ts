import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sensore from 'App/Models/Sensore';
import sch_Sensores from 'App/Models/Sensore'
const mongoose=require("mongoose");

mongoose
  .connect('mongodb+srv://root:ZXCVzxcv1234@sandbox1.1jic6.mongodb.net/proyecto')
  .then(() => console.log('conectado'))
  .catch((error) => console.error(error))

/* 
aqui se hara el crud para los sensores de los usuarios
se debera pedir el id del usuario siempre se mostrara 
solo los sensores del usuario en la sesion de angular
*/
export default class SensoresMongoosesController {
  public async show({params}){
    const datos = await sch_Sensores.findOrFail(params.id)
    return datos; 
  }

  public async store({ request, response }: HttpContextContract) {
    const sensoredata = request.only([
      'idsensor',
      'idUsuario',
      'NombreSensor',
      'Descripcion',
      'GPIO',
      'Estado',
      'Fechadecreacion',
      'Fechadeactualizacion',
    ])
    const sensor = await sch_Sensores.create(sensoredata)
    return response.created({
      status: true,
      data: sensor,
    })
  }
  async mostar() {
    const con = mongoose.createConnection(
      'mongodb+srv://root:ZXCVzxcv1234@sandbox1.1jic6.mongodb.net/proyecto'
    )
    const db= con.model('sensores', Sensore)
    let buscar = db
      .find({'idUsuario':1})
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    return buscar
  }
}
