const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/adminController');
const router = express.Router();

// Ruta para registrar admin
router.post('/signup', registerAdmin)

// Ruta para iniciar sesion
router.post('/login', loginAdmin)


module.exports = router