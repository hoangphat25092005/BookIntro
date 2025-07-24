const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    stock: Number,
    description: String,
    category: String,
    image: String,
});

const Book = mongoose.model('Book', Schema);
module.exports = Book;