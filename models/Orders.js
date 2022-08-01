const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const ordersSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'customers'
        },
        products: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'
            },
            cant: {
                type: Number
            }
        }],
        total: {
            type: Number
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

ordersSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('orders', ordersSchema);