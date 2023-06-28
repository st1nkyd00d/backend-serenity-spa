const mongoose = require('mongoose');

const tipSchema = mongoose.Schema({
    tipShared: {
        type: String,
        required: [true, 'Es necesario ingresar un consejo']
    }
})

module.exports = mongoose.model('Tips', tipSchema);