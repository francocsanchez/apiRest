const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        price: {
            type: Number
        },
        img: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

productsSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('products', productsSchema);