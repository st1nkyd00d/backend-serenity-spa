const Tips = require('../models/tipsModel');


const getTips = async (req, res) => {
    try {
        const tip = await Tips.find({});
        res.status(200).json(tip);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al obtener los consejos.' });
    }
};


const createTips = async (req, res) => {
    try {
        const { tipShared } = req.body;
        const tip = await Tips.create({
            tipShared
        })
        res.status(201).json(`El consejo con el dato: ${tip} ha sido creado correctamente.`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar crear un nuevo consejo.' });
    }

}

const updateTips = async (req, res) => {
    try {
        const tip = await Tips.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(tip);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar editar la información del consejo.' });
    }

}

const deleteTips = async (req, res) => {
    try {
        const tip = await Tips.findByIdAndDelete(req.params.id);
        res.status(200).json(`Borrando el consejo con el dato: ${tip}`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar borrar el tip.' });
    }
}
module.exports = { getTips, createTips, updateTips, deleteTips };