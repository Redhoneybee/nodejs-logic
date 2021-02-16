const mongoose = require('mongoose');


const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);