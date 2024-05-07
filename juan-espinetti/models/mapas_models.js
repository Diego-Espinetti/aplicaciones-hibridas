import mongoose from "mongoose"

const mapasSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    objetos_especiales:{
        type:String,
        require:true
    },
    multijugador:{
        type:String,
        require:true
    }
    
})


export default mongoose.model("Mapas", mapasSchema)