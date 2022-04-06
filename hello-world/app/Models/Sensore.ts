const mongoose=require("mongoose")

const sch_Sensores=mongoose.Schema({
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
