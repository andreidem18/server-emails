const express = require("express");
const app = express();

const {enviarCorreo} = require("./nodemailer");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home rute");
})

app.get("/send-email", (req, res) => {
    res.send("Emails route");
})

app.post("/send-email", (req, res) => {
    const {name, email, phone, message} = req.body;
    enviarCorreo(name, email, phone, message);
    res.json({
        message: "the email was sent"
    });
});

app.listen(8000, () => {
    console.log("Servidor iniciado en el puerto 8000");
});