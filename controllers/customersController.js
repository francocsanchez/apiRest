const { customersModel } = require('../models');

// TODO: Listar clientes
const getItems = async (req, res, next) => {
    try {
        const data = await customersModel.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Listar cliente
const getItem = async (req, res, next) => {
    const data = await customersModel.findById(req.params.id);

    if (!data) {
        res.json({ msj: 'El cliente no existe' });
        next();
    }
    res.json(data);
}

// TODO: Crear cliente
const createItem = async (req, res, next) => {
    const customer = new customersModel(req.body);

    try {
        await customer.save();
        res.json({ msj: 'Cliente creado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Actualizar cliente
const updateItem = async (req, res, next) => {
    try {
        const data = await customersModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(data)
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Eliminar cliente
const deleteItem = async (req, res, next) => {
    try {
        await customersModel.findOneAndDelete({ _id: req.params.id });
        res.json({ msj: 'Cliente eliminado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}