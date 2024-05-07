import Dinosaurios from "../models/dinosaurios_models.js"

async function getDinos(){
    let dinos = await Dinosaurios.find();
    return dinos;
}

async function getDino(nombre){
    let dinos = await Dinosaurios.findOne({"nombre": nombre});
    return dinos;
}
async function deleteDino(nombre){
    let dinos = await Dinosaurios.deleteOne({"nombre": nombre});
    return dinos;
}


async function getNutricion(nutricion){
    let dinos = await Dinosaurios.find({"nutricion": nutricion});
    return dinos;
}


async function getByCantidad(cantidad){
    let dinos = await Dinosaurios.find().limit(cantidad)
    return dinos;
}

async function getOrdenamiento(){
    let dinos = await Dinosaurios.find();
        return dinos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    


async function createDino(body){
    let dinos = new Dinosaurios({
        nombre: body.nombre,
        descripcion: body.descripcion,
        doma: body.doma,
        nutricion: body.nutricion,
        comportamiento: body.comportamiento,
        imagen: body.imagen,
        vida: body.vida,
    })
    return await dinos.save();
} 

async function updateDino(nombre, body){
    let Dino = await Dinosaurios.updateOne({"nombre": nombre}, {
        $set: {
            nombre: body.nombre,
            descripcion: body.descripcion,
            doma: body.doma,
            nutricion: body.nutricion,
            comportamiento: body.comportamiento,
            imagen: body.imagen,
            vida:body.vida
        }
    })
    return Dino;

}

export { getByCantidad, getDino, getDinos, createDino, updateDino, deleteDino, getNutricion, getOrdenamiento}