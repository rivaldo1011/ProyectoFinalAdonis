import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import sch_Historial from 'App/Models/Historial'
const mongoose=require("mongoose");
mongoose
    .connect("mongodb+srv://root:ZXCVzxcv1234@sandbox1.1jic6.mongodb.net/proyecto")
    .then(()=>console.log("conectado"))
    .catch((error)=>console.error(error))

export default class HistorialMongoosesController {
 
    public async index({response}: HttpContextContract) {
      const historial= await sch_Historial.find()
      return response.created({
        status:true,
        data:historial 
      })}
        
    public async store({request,response}: HttpContextContract) {
      const historialdata=request.only([
      'id',
      'idsensor',
      'Nombre',
      'Valor',
      'Fechadecreacion',
      'Fechadeactualizacion'])
      const historial=await sch_Historial.create(historialdata);
      return response.created({
        status:true,
        data:historial
      })
     }
}

