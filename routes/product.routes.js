import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    getProductByCode,  // Import the new function
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/code/:p_code', getProductByCode); // New route for getProductByCode
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
