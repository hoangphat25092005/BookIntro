// implement the book controller
const Book = require('../models/Book');
const mongoose = require('mongoose');

// Create a new book
const createBook = async (req, res) => {
    const { title, author, price, stock, description, category, image } = req.body;
    try {
        const book = new Book({
            title,
            author,
            price,
            stock,
            description,
            category,
            image
        });
        await book.save();
        res.status(201).json({ message: 'Book created successfully', book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (books.length == 0) {
            return res.status(404).json({ message: 'No books found' });
        }
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a single book by ID
const getBookById = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a book by ID
const updateBookById = async (req, res) => {
    const bookId = req.params.bookId;
    const { title, author, price, stock, description, category, image } = req.body;
    try {
        const book = await Book.findByIdAndUpdate(bookId, {
            title,
            author,
            price,
            stock,
            description,
            category,
            image
        }, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book updated successfully', book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a book by ID
const deleteBookById = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: 'Book deleted successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Export the book controller functions
module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
};