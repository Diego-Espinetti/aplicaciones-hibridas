import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import dinosaurios_routes from "./routes/dinosaurios_routes.js";
import mapas_routes from "./routes/mapas_routes.js";

mongoose
.connect("mongodb://127.0.0.1:27017/Ark")
.then(() => {console.log("conectado a MongoDB")})
.catch((err) => {console.log("No se pudo conectar: " + err)})

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/dinosaurios", dinosaurios_routes)
app.use("/mapas", mapas_routes)

app.get('/', (req, res) => {
    res.send("hola")
})


const PORT = process.env.PORT || 5500;
app.listen(PORT)