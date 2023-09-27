const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: {type: [mongoose.Schema.Types.Mixed], required: true},
    totalAmount: {type: Number},
    totalCartItems: {type: Number},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    paymentMethod: {type: String, required: true},
    status: {type: String, default: 'pending'},
    selectedAddress: {type: mongoose.Schema.Types.Mixed, required: true}
})

exports.Order = mongoose.model('Order', orderSchema);