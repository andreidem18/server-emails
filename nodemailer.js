const nodemailer = require("nodemailer");
const {google} = require("googleapis");

const OAuth2 = google.auth.OAuth2;
const googleID = "";
const googleSecret = "";
const refreshToken = "";


const oauth2Client = new OAuth2(
    googleID, //clientId
    googleSecret, //client Secret
    "https://developers.google.com/oauthplayground" //redirect url
)

oauth2Client.setCredentials({
    refresh_token: refreshToken
});

const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "tuemail@gmail.com",
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
    from: "desde@gmail.com",
    to: "andres.david.mm@hotmail.com",
    subject: "Prueba de correo",
    generateTextFromHTML: true,
    html: "<h2>Hello world!</h2><p>Prueba de correo electronico</p>"
}

const enviarCorreo = () => {
    smtpTransport.sendMail(mailOptions, (error, response) => {
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