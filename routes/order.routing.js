//Order routing
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

// Create a new order
router.post('/create', orderController.createOrder);
// Get all orders
router.get('/all', orderController.getUserOrders);
//Get all orders by USER ID
router.get('/user/:userId', orderController.getOrderById);
// Update order by ID
router.put('/update/:orderId', orderController.updateOrderStatus);
// Delete order by ID
router.delete('/delete/:orderId', orderController.deleteOrder);

module.exports = router;