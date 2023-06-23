const Forms = require('../models/formModel');
const emailTransporter = require('../config/mailer');

const saveFormData = async (req, res) => {
    try {
        const { email, date, time, desiredService } = req.body;
        const form = await Forms.create({
            email,
            date,
            time,
            desiredService
        })
        console.log(form)
        await emailTransporter.sendMail({
            from: '"Serenity Spa ⭐" <SerenitySpaNoReply@gmail.com>', 
            to: email, 
            subject: "¡Gracias por hacer tu reserva en Serenity Spa!", 
            html: "<b> Hemos recibido tu reserva en Serenity Spa. Un miembro de nuestro equipo se pondrá en contacto contigo tan pronto como sea posible para verificar si existe disponibilidad para el día ${date} por la ${time}. ¡Agradecemos tu interés por reservar en Serenity Spa! </b>", 
        });

        res.status(201).json('Se han guardado los datos del formulario en la base de datos.');
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error intentar guardar el formulario' });
    }
}


module.exports = { saveFormData }