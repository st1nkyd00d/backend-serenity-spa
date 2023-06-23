const Services = require('../models/servicesModel');

const getServices = async (req, res) => {
    try {
        const service = await Services.find({});
        res.status(200).json(service);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al obtener los servicios.' });
    }
};


const createServices = async (req, res) => {
    try {
        const { serviceName, description, price } = req.body;
        const service = await Services.create({
            serviceName,
            description,
            price
        })
        res.status(201).json(`El servicio con los datos ${service} ha sido creado correctamente.`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar crear el servicio.' });
    }

}

const updateServices = async (req, res) => {
    try {
        const service = await Services.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(service);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar editar la informacion del servicio.' });
    }

}

const deleteServices = async (req, res) => {
    try {
        const service = await Services.findByIdAndDelete(req.params.id);
        res.status(200).json(`Borrando el servicio con los datos: ${service}`);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocurrió un error al intentar borrar el servicio.' });
    }
}
module.exports = { getServices, createServices, updateServices, deleteServices };