const express = require('express');
const router = express.Router();

const { getItems, createItem, getItem } = require('../controllers/customersController');

// TODO: Clientes rutas
router.get('/', getItems);
router.post('/', createItem);
router.get('/:id', getItem);

module.exports = router;