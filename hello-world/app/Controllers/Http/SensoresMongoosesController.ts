import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import sch_Sensores from 'App/Models/Sensore'
const mongoose=require("mongoose");
mongoose
    .connect("mongodb+srv://root:ZXCVzxcv1234@sandbox1.1jic6.mongodb.net/proyecto")
    .then(()=>console.log("conectado"))
    .catch((error)=>console.error(error))


export default class SensoresMongoosesController {
  public async index({response}: HttpContextContract) {
    const historial= await sch_Sensores.find()
    return response.created({
      status:true,
      data:historial
    })}

    public async store({request,response}: HttpContextContract) {
      const sensoredata=request.only(['idsensor','idUsuario','NombreSensor','Descripcion','GPIO','Estado','Fechadecreacion','Fechadeactualizacion'])
      const sensor=await sch_Sensores.create(sensoredata);
      return response.created({
        status:true,
        data:sensor
      })}
}