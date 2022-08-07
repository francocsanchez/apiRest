const express = require('express');
const router = express.Router();

const { uploadImg, getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/productsController');

// TODO: Productos rutas
router.get('/', getItems);
router.post('/', uploadImg, createItem);
router.get('/:id', getItem);
router.put('/:id', uploadImg, updateItem);
router.delete('/:id', deleteItem);

module.exports = router;