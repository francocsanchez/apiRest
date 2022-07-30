const express = require('express');
const router = express.Router();

const { getItems } = require('../controllers/customersController');

// TODO: Clientes rutas
router.get('/', getItems);

module.exports = router;