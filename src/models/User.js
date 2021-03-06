const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
    }

})


const User = mongoose.model('User', userSchema);


exports.User = User;
