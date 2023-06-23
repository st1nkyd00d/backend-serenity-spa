const express = require('express');
const { getServices, createServices, updateServices, deleteServices } = require('../controllers/servicesController');
const router = express.Router();

// Rutas para servicios
// Obtener todos los servicios
router.get('/obtenerServicios', getServices)

// Crear un servicio
router.post('/crearServicio', createServices)

// Actualizar un servicio
router.put('/:id/actualizarServicio', updateServices)

// Borrar un servicio
router.delete('/:id/borrarServicio', deleteServices)


module.exports = router;