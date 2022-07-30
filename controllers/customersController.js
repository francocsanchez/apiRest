const { customersModel } = require('../models');

// TODO: Listar usuarios
const getItems = async (req, res) => {
    const data = await customersModel.find({});
    
    res.send({ data });
}

module.exports = {
    getItems
}