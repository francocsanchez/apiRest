const { ordersModel } = require('../models');

// TODO: Listar pedidos
const getItems = async (req, res, next) => {
    try {
        const data = await ordersModel.find({}).populate('customer').populate({
            path: 'products.product',
            model: 'products'
        });
        res.json(data);
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Listar pedido
const getItem = async (req, res, next) => {
    const data = await ordersModel.findById(req.params.id)
    .populate('customer')
    .populate({
        path: 'products.product',
        model: 'products'
    });

    if (!data) {
        res.json({ msj: 'El pedido no existe' });
        next();
    }
    res.json(data);
}

// TODO: Crear pedido
const createItem = async (req, res, next) => {
    const order = new ordersModel(req.body);

    try {
        await order.save();
        res.json({ msj: 'Pedido creado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Actualizar pedido
const updateItem = async (req, res, next) => {
    try {
        const data = await ordersModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'products'
        });
        res.json(data)
    } catch (error) {
        console.log(error);
        next();
    }
}

// TODO: Eliminar pedido
const deleteItem = async (req, res, next) => {
    try {
        await ordersModel.findOneAndDelete({ _id: req.params.id });
        res.json({ msj: 'Pedido eliminado correctamente' });
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