const express = require('express');
const { getServices, createServices, updateServices, deleteServices } = require('../controllers/servicesController');
const { getPromos, createPromos, updatePromos, deletePromos } = require('../controllers/promosController');
const { getTestimonies, createTestimonies, updateTestimonies, deleteTestimonies } = require('../controllers/testimoniesController');
const { saveFormData } = require('../controllers/formController');
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


//Rutas para promociones
//Obtener todas las promos
router.get('/obtenerPromos', getPromos)

// Crear una promo
router.post('/crearPromo', createPromos)

// Actualizar una promo
router.put('/:id/actualizarPromo', updatePromos)

// Borrar una promo
router.delete('/:id/borrarPromo', deletePromos)

//Rutas para testimonios
//Obtener todas los testimonios
router.get('/obtenerTestimonios', getTestimonies)

// Crear una promo
router.post('/crearTestimonio', createTestimonies)

// Actualizar una promo
router.put('/:id/actualizarTestimonio', updateTestimonies)

// Borrar una promo
router.delete('/:id/borrarTestimonio', deleteTestimonies)

// Ruta para guardar datos del formulario
// Guardando los datos...

router.post('/guardarFormulario', saveFormData)

module.exports = router;