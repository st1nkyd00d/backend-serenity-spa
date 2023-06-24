const bcrypt = require('bcrypt');
const Admins = require('../models/adminModel');
const { createToken } = require('./jwtCreateController');


const registerAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'El usuario y la contraseña son requeridos' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admins.create({
            username,
            password: hashedPassword
        })
        res.status(201).json(`El admin con los datos: ${admin} ha sido creado correctamente.`);
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return res.status(400).json({ error: 'El usuario ya existe. Por favor escoja otro' });
        }
        res.status(500).json({ error: 'Ocurrió un error al intentar crear un nuevo admin.' });
    }
}


const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'El usuario y la contraseña son requeridos para iniciar sesion' });
        }
        const admin = await Admins.findOne({ username });
        if (!admin) {
            return res.status(400).json({ error: 'El usuario no existe' });
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'La contraseña es incorrecta' });
        }
        let token = createToken({ id: admin._id, username: admin.username });
        res.status(200).json(token);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar iniciar sesion.' });
    }
}

module.exports = { registerAdmin, loginAdmin };