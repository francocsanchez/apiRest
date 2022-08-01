const express = require('express');
const router = express.Router();

const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/ordersController');

// TODO: Pedidos rutas
router.get('/', getItems);
router.post('/', createItem);
router.get('/:id', getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;