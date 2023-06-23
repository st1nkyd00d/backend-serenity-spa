const mongoose = require('mongoose');
const URI = 'mongodb+srv://SerenitySPADBMaster:qcIzRaUy3x8r7Hp2@cluster0.qtcmtta.mongodb.net/serenity_db?retryWrites=true&w=majority'

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos con MongoDB conectada');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb