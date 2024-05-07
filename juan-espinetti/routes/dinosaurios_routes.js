import express  from "express"
import Dinosaurios from "../models/dinosaurios_models.js"
import { getByCantidad, getDino, getDinos, createDino, updateDino, deleteDino, getNutricion, getOrdenamiento} from "../controllers/dinosaurios_controller.js"

const ruta = express.Router()

ruta.get('/', (req, res) =>{
    let resultado = getDinos()
    resultado
    .then(dinosaurios => {
        res.json(dinosaurios)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.post('/', (req, res) =>{
    let body = req.body;
    let resultado = createDino(body)
    resultado
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.put('/:nombre', (req, res) =>{
    let body = req.body;
    let resultado = updateDino(req.params.nombre, body)
     resultado
     .then(Dino => {
         res.json(Dino)
     })
     .catch(err => {
         res.status(400).json({err})
     })
 });





ruta.get('/:nombre', (req, res) =>{
    let resultado = getDino( req.params.nombre )
    resultado
    .then(dinos=> {
        res.json(dinos)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})
 


ruta.delete('/:nombre', (req, res) =>{
    let resultado = deleteDino()
    resultado
    .then(dinosaurios => {
        res.json(dinosaurios)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.get('/nutricion/:tipo', (req, res) =>{
    let resultado = getNutricion(req.params.tipo)
    resultado
    .then(dinosaurios => {
        res.json(dinosaurios)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})
ruta.get('/orden/mayor', (req, res) =>{
    let resultado = getOrdenamiento()
    resultado
    .then(dinosaurios => {
        res.json(dinosaurios)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})
ruta.get('/cantidad/:numero', (req, res) =>{
    let resultado = getByCantidad(req.params.numero)
    resultado
    .then(dinosaurios => {
        res.json(dinosaurios)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})






export default ruta;