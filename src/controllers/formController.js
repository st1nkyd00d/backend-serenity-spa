const Forms = require('../models/formModel');

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
        res.status(201).json('Se han guardado los datos del formulario en la base de datos.');
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error intentar guardar el formulario' });
    }
}

module.exports = { saveFormData }