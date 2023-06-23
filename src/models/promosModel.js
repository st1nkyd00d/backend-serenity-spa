const mongoose = require('mongoose');

const promoSchema = mongoose.Schema({
    promoCode: {
        type: String,
        required: [true, 'Es necesario ingresar un código de promoción']
    },
    discountAmount: {
        type: Number,
        required: [true, 'Es obligatorio especificar el porcentaje de descuento (un entero entre 5 y 90)'],
        validate: {
            validator: function (value) {
                return value >= 5 && value <= 90;
            },
            message: 'El descuento debe ser un número entre 5 y 90'
        }
    },
})

module.exports = mongoose.model('Promo', promoSchema);