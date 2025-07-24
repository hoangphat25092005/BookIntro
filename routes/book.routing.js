// book routing 
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// Create a new book
router.post('/create', bookController.createBook);
// Get all books
router.get('/all', bookController.getAllBooks);
// Get a single book by ID;
router.get('/:bookId', bookController.getBookById);
// update book by id
router.put('/:bookId', bookController.updateBookById);
// delete book by ID
router.delete('/:bookId', bookController.deleteBookById);

module.exports = router;
