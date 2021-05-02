const nodemailer = require("nodemailer");
const {google} = require("googleapis");

const OAuth2 = google.auth.OAuth2;
const googleID = "378016936449-10ftcm29l8ba1rqc26s8acgeqo1l37i1.apps.googleusercontent.com";
const googleSecret = "Ky0fjlTmDVp_rIa_Idf2JUJF";
const refreshToken = "1//04giWeRU_ActLCgYIARAAGAQSNwF-L9IrX-4-lSCeps3waXe0wS1d5e4yP6EiJZuNKMD5a123hOSr0q3vAYZZ85CG4wWjt72OsJY";


const oauth2Client = new OAuth2(
    googleID, 
    googleSecret,
    "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
    refresh_token: refreshToken
});

const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "andres.davidflute@gmail.com",
        clientId: googleID,
        clientSecret: googleSecret,        
        refreshToken: refreshToken,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

const mailOptions = {
    from: "andres.davidflute@gmail.com",
    to: "andres.david.mm@hotmail.com",
    subject: "Prueba de correo",
    generateTextFromHTML: true,
    html: "<h2>Hello world!</h2><p>Prueba de correo electronico</p>"
}

const enviarCorreo = (name, email, phone, message) => {
    smtpTransport.sendMail({
                    from: "andres.davidflute@gmail.com",
                    to: "andres.david.mm@hotmail.com",
                    subject: "¡Correo desde el portafolio!",
                    generateTextFromHTML: true,
                    html: `<h2>${name}</h2><p>${email}</p><p>${phone}</p><p>${message}</p>`
                }, (error, response) => {
        if(error){
            console.log(error);            
        }else{
            console.log(response);            
        }
    })
}


module.exports = {
    enviarCorreo
}