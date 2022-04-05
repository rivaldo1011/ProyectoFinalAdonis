import mongoose, { Schema, model } from 'mongoose';

const sch_Sensores=new Schema({
  "idsensor": Number,
  "idUsuario": Number,
  "NombreSensor": String,
  "Descripcion": String,
  "GPIO":Array,
  "Estado":String,
  "Fechadecreacion": Date,
  "Fechadeactualizacion": Date
});
export default sch_Sensores;
