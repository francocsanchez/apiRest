const express = require('express');
const router = express.Router();

const { getItems, createItem } = require('../controllers/customersController');

// TODO: Clientes rutas
router.get('/', getItems);
router.post('/create', createItem);

module.exports = router;