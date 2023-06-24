const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El campo de usuario es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Es necesario ingresar una contraseña'],
    },
})

module.exports = mongoose.model('Admin', adminSchema);