const Promos = require('../models/promosModel');


const getPromos = async (req, res) => {
    try {
        const promo = await Promos.find({});
        res.status(200).json(promo);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al obtener las promociones.' });
    }
};


const createPromos = async (req, res) => {
    try {
        const { promoCode, discountAmount } = req.body;
        const promo = await Promos.create({
            promoCode,
            discountAmount
        })
        res.status(201).json(`La promoción con los datos: ${promo} ha sido creado correctamente.`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar crear la promoción.' });
    }

}

const updatePromos = async (req, res) => {
    try {
        const promo = await Promos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(promo);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar editar la informacion de la promo.' });
    }

}

const deletePromos = async (req, res) => {
    try {
        const promo = await Promos.findByIdAndDelete(req.params.id);
        res.status(200).json(`Borrando la promo con los datos: ${promo}`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar borrar la promo.' });
    }
}
module.exports = { getPromos, createPromos, updatePromos, deletePromos };