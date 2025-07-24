const mongoose = require('mongoose');

// User registration and login model
//Register model
const RegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        //at least 8 characters
        minlength: 8,
        maxlength: 128,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    }
})

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', RegisterSchema);
const Login = mongoose.model('Login', loginSchema);
module.exports = { User, Login };
