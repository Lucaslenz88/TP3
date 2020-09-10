const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

// String de conexión con la base de datos
const uri = "mongodb+srv://grupo_tres:123hola@cluster0.b6m6q.mongodb.net/biblioteca?retryWrites=true&w=majority";

async function conectar() {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a la base de datos metodo: mongoodb - async-await");
    }
    catch(e){
        console.log(e);
    }
};

conectar();

// Paso 1: definir esquema/s
const LibroSchema = new mongoose.Schema({
    name: String,
    author: String,
    gender: String,
    lended: String
});

// Paso 2: Armo el modelo
const LibroModel = mongoose.model("libros", LibroSchema);










app.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});





