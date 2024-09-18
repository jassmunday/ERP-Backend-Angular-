import express from 'express';
import {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrderByOrderId,
    updateOrderById,
    deleteOrderById
} from '../controllers/orders.controller.js'; // Adjust the path as needed

const router = express.Router();

// Route to create a new order
router.post('/', createOrder);

// Route to get all orders
router.get('/', getAllOrders);

// Route to get a single order by ID
router.get('/:id', getOrderById);

// Route to get a single order by order_id
router.get('/order/:order_id', getOrderByOrderId);

// Route to update an order by ID
router.put('/:id', updateOrderById);

// Route to delete an order by ID
router.delete('/:id', deleteOrderById);

export default router;
