const express = require('express');
const router = express.Router();

const { getItems, createItem, getItem, updateItem } = require('../controllers/customersController');

// TODO: Clientes rutas
router.get('/', getItems);
router.post('/', createItem);
router.get('/:id', getItem);
router.put('/:id', updateItem);

module.exports = router;