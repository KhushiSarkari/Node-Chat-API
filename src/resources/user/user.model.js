const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    phoneNumber: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;