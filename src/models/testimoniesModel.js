const mongoose = require('mongoose');

const testimonySchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Es necesario ingresar una descripción']
    },
    reviewerName: {
        type: String,
        required: [true, 'Es necesario ingresar un nombre']
    },
})

module.exports = mongoose.model('Testimony', testimonySchema);