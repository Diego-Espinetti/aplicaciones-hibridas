import express  from "express"
import { getByCantidad, getMapas, getMapa, createMapa, updateMapa, deleteMapa, getOrdenamiento} from "../controllers/mapas_controller.js"

const ruta = express.Router()

ruta.get('/', (req, res) =>{
    let resultado = getMapas()
    resultado
    .then(mapas => {
        res.json(mapas)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.post('/', (req, res) =>{
    let body = req.body;
    let resultado = createMapa(body)
    resultado
    .then(mapa => {
        res.json(mapa)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.put('/:nombre', (req, res) =>{
    let body = req.body;
    let resultado = updateMapa(req.params.nombre, body)
     resultado
     .then(mapa => {
         res.json(mapa)
     })
     .catch(err => {
         res.status(400).json({err})
     })
 });


 ruta.get('/:nombre', (req, res) =>{
    let resultado = getMapa(req.params.nombre)
    resultado
    .then(mapas => {
        res.json(mapas)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})





ruta.delete('/:nombre', (req, res) =>{
    let resultado = deleteMapa()
    resultado
    .then(mapa => {
        res.json(mapa)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})


ruta.get('/orden/mayor', (req, res) =>{
    let resultado = getOrdenamiento()
    resultado
    .then(mapass => {
        res.json(mapass)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})


ruta.get('/cantidad/:numero', (req, res) =>{
    let resultado = getByCantidad(req.params.numero)
    resultado
    .then(mapas => {
        res.json(mapas)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})






export default ruta;