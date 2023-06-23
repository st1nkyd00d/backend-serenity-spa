const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'SerenitySpaNoReply@gmail.com',
      pass: 'cafwhdgbcvbhqmux' // Aqui podria usar variable de entorno
    }
  });

  transporter.verify().then(() => {
    console.log('Listo para enviar correos!')
  })

  module.exports = transporter;