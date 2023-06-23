const Testimonies = require('../models/testimoniesModel');


const getTestimonies = async (req, res) => {
    try {
        const testimony = await Testimonies.find({});
        res.status(200).json(testimony);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al obtener los testimonios.' });
    }
};


const createTestimonies = async (req, res) => {
    try {
        const { description, reviewerName } = req.body;
        const testimony = await Testimonies.create({
            description,
            reviewerName
        })
        res.status(201).json(`El testimonio con los datos: ${testimony} ha sido creado correctamente.`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar crear un nuevo testimonio.' });
    }

}

const updateTestimonies = async (req, res) => {
    try {
        const testimony = await Testimonies.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(testimony);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar editar la información del testimonio.' });
    }

}

const deleteTestimonies = async (req, res) => {
    try {
        const testimony = await Testimonies.findByIdAndDelete(req.params.id);
        res.status(200).json(`Borrando el testomonio con los datos: ${testimony}`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar borrar el testimonio.' });
    }
}
module.exports = { getTestimonies, createTestimonies, updateTestimonies, deleteTestimonies };