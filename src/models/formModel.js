const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Es necesario ingresar un email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingrese un email válido']
    },
    date: {
        type: Date,
        required: [true, 'Es necesario ingresar una fecha']
    },
    time: {
        type: String,
        required: [true, 'Es necesario ingresar una hora (mañana, tarde o noche)']
    },
    desiredService: {
        type: String,
        required: [true, 'Es necesario ingresar un tipo de servicio']
    }
});

module.exports = mongoose.model('Form', formSchema);
