import mongoose from "mongoose"

const dinosauriosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    doma:{
        type: String,
        required: true
    },
    nutricion:{
        type: String,
        required: true
    },
    comportamiento:{
        type: String,
        required: false
    },
    imagen:{
        type: String,
        required: false
    },
    vida:{
        type: String,
        required: false
    }
})

export default mongoose.model('Dinosaurios', dinosauriosSchema)