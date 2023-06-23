const Testimonies = require('../models/testimoniesModel');


const getTestimonies = async (req, res) => {
    try {
        const testimony = await Testimonies.find({});
        res.status(200).json(testimony);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al obtener las promociones.' });
    }
};


const createTestimonies = async (req, res) => {
    try {
        const { description, reviewerName } = req.body;
        const testimony = await Testimonies.create({
            description,
            reviewerName
        })
        res.status(201).json(`La promoción con los datos: ${testimony} ha sido creado correctamente.`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar crear la promoción.' });
    }

}

const updateTestimonies = async (req, res) => {
    try {
        const testimony = await Testimonies.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(testimony);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar editar la informacion de la promo.' });
    }

}

const deleteTestimonies = async (req, res) => {
    try {
        const testimony = await Testimonies.findByIdAndDelete(req.params.id);
        res.status(200).json(`Borrando la promo con los datos: ${testimony}`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar borrar la promo.' });
    }
}
module.exports = { getTestimonies, createTestimonies, updateTestimonies, deleteTestimonies };