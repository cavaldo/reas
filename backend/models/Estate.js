const mongoose = require('mongoose');

const EstateSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    personal_data: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Estates', EstateSchema);