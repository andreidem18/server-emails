const express = require("express");
const fs = require("fs"); //filesystem
const app = express();

const {enviarCorreo} = require("./nodemailer");

//req => request (peticion)
//res => response (respuesta)
app.get("/users", (req, res) => {
    fs.readFile('db.json', (error, data) => {
        if(error){
            return res.json({
                message: "No puede ser procesada la respuesta"
            });
        }
        return res.send(data.toString())
    })
});

app.post("/enviar-correo", (req, res) => {
    enviarCorreo();
    res.json({
        message: "Se ha enviado el correo electronico"
    });
});

app.listen(8000, () => {
    console.log("Servidor iniciado en el puerto 8000");
});