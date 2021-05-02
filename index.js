const express = require("express");
const app = express();

const {enviarCorreo} = require("./nodemailer");

app.use(express.json());

app.post("/enviar-correo", (req, res) => {
    const {name, email, phone, message} = req.body;
    enviarCorreo(name, email, phone, message);
    res.json({
        message: "Se ha enviado el correo electronico"
    });
});

app.listen(8000, () => {
    console.log("Servidor iniciado en el puerto 8000");
});