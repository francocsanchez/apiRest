const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        lastname: {
            type: String,
            trim: true
        },
        company: {
            type: String,
            trim: true
        },
        email: {
            type: String
        },
        phone: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

customerSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('customers', customerSchema);