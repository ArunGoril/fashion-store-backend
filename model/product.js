const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: String, min: [0, 'wrong min price'], max: [10000, 'wrong max price']},
    category: {type: String, required: true},
    images: {type: [String], required: true},
})

exports.Product = mongoose.model('Product', productSchema);