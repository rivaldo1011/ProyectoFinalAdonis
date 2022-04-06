const mongoose=require("mongoose")

const sch_Historial=mongoose.Schema({
  "id": Number,
  "idsensor": Number,
  "Nombre": String,
  "Valor":Array,
  "Fechadecreacion": Date,
  "Fechadeactualizacion": Date
});
export default sch_Historial;
