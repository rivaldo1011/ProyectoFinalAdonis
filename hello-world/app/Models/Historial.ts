import mongoose, { Schema, model } from 'mongoose';

const sch_Historial=new Schema({
  "id": Number,
  "idsensor": Number,
  "nombre": String,
  "Estado": String,
  "Temperatura":Number,
  "Humedad":Number,
  "Fechadecreacion": Date,
  "Fechadeactualizacion": Date
});
export default sch_Historial;
