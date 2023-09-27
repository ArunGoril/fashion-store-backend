const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    quantity: {type: String, required: true},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
    
})

exports.Cart = mongoose.model('Cart', cartSchema);