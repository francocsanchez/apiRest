require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo'); // Archivo de configuracion de BD
const bodyParser = require('body-parser');

const app = express(); // Inicio del servidor

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.use(cors());

// TODO: Main de rutas
const { customersRoutes, productsRoutes, ordersRoutes } = require('./routes/Index');
app.use('/customers', customersRoutes);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

//* Carpeta publica de archivos
app.use(express.static('uploads'));

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})
dbConnect();