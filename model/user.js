const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: 'user'},
    addresses: {type: [mongoose.Schema.Types.Mixed]},
    orders: {type: [mongoose.Schema.Types.Mixed]},
})

exports.User = mongoose.model('User', userSchema);