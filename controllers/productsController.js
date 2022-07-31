const { productsModel } = require('../models');

const multer = require('multer');
const shortid = require('shortid');

//* Configuracion de multer
const configMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => { cb(null, __dirname + '../../uploads'); },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else { cb(new Error('Formato no válido'), false); }
    }
}

//* Subir imagen
const upload = multer(configMulter).single('img');

const uploadImg = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) { res.json({ msj: error }) }
        return next();
    })
}

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
    const product = new productsModel(req.body);

    try {
        if (req.file.filename) { product.img = req.file.filename }
        await product.save();
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
    uploadImg,
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}