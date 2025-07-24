// order controller for mapping orders to users and books
const mongoose = require('mongoose');
const Order = require('../models/Order');
const Book = require('../models/Book');
const { User } = require('../models/User');

// Create a new order
const createOrder = async (req, res) => {
    const { bookId, userId, quantity } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const book = await Book.findById(bookId);
        const user = await User.findById(userId);
        if (!book || !user) {
            return res.status(404).json({ message: 'Book or user not found' });
        }
        const order = new Order({
            book: bookId,
            user: userId,
            quantity
        });
        await order.save({ session });
        await session.commitTransaction();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        await session.abortTransaction();
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        session.endSession();
    }
};

// Get all orders for a user
const getUserOrders = async (req, res) => {
    const userId = req.params.userId;
    try {
        const orders = await Order.find({ user: userId }).populate('book');
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get single order by ID
const getOrderById = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = await Order.findById(orderId).populate('book user');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an order status
const updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = status;
        await order.save();
        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete an order
const deleteOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = await Order.findByIdAndDelete(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Export the controller functions
module.exports = {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    deleteOrder
}
