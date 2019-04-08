const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TRN_product = new Schema({
    ID_product: {
        type: String
    },
    date: {
        type: String
    },
    details: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: String
    },
    
    product_type: {
        type: String
    }
}, {
        collection: 'TRN_product'
    });

module.exports = mongoose.model('TRN_product', TRN_product);