const express = require("express");
const cors = require("cors");
const app = express();

const {enviarCorreo} = require("./nodemailer");

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors());

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

app.listen(PORT, () => {
    console.log("Server listening on", PORT);
});