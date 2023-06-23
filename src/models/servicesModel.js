const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: [true, 'El nombre del servicio es requerido']
    },
    description: {
        type: String,
        required: [true, 'La descripción del servicio no puede quedar vacía']
    },
    price:{
        type: Number,
        required: [true, 'Es necesario especificar el precio por el cual el servicio se va a cobrar']
    },
})

module.exports = mongoose.model('Service', serviceSchema);