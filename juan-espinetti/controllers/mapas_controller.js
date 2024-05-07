import mapas from "../models/mapas_models.js"

async function getMapas(){
    let mapa = await mapas.find();
    return mapa;
}

async function getMapa(nombre){
    let mapa = await mapas.findOne({"nombre": nombre});
    return mapa;
}
async function deleteMapa(){
    let mapa = await mapas.deleteOne();
    return mapa;
}


async function getByCantidad(cantidad){
    let mapa = await mapas.find().limit(cantidad)
    return mapa;
}

async function getOrdenamiento(){
    let mapa = await mapas.find();
        return mapa.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    


async function createMapa(body){
    let mapa = new mapas({
        nombre: body.nombre,
        descripcion: body.descripcion,
        objetos_especiales: body.objetos_especiales,
        multijugador: body.multijugador,
    })
    return await mapa.save();
} 

async function updateMapa(nombre, body){
    let mapa = await mapas.updateOne({"nombre": nombre}, {
        $set: {
            nombre: body.nombre,
            descripcion: body.descripcion,
            objetos_especiales: body.objetos_especiales,
            multijugador: body.multijugador,
        }
    })
    return mapa;

}

export { getByCantidad, getMapas,getMapa, createMapa, updateMapa, deleteMapa, getOrdenamiento}