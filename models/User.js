const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        default: '',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        default: '',
    },
    provider: {
        type: String,
        default: 'user',
        required: true,
    }
});

module.exports = User = mongoose.model('user', UserSchema);
