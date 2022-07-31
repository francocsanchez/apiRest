const { productsModel } = require('../models');

// TODO: Listar productos
const getItems = async (req, res, next) => {
    try {
        const data = await productsModel.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Listar producto
const getItem = async (req, res, next) => {
    const data = await productsModel.findById(req.params.id);

    if (!data) {
        res.json({ msj: 'El producto no existe' });
        next();
    }
    res.json(data);
}

// TODO: Crear producto
const createItem = async (req, res, next) => {
    const customer = new productsModel(req.body);

    try {
        await customer.save();
        res.json({ msj: 'Producto creado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Actualizar producto
const updateItem = async (req, res, next) => {
    try {
        const data = await productsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(data)
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Eliminar producto
const deleteItem = async (req, res, next) => {
    try {
        await productsModel.findOneAndDelete({ _id: req.params.id });
        res.json({ msj: 'Producto eliminado correctamente' });
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