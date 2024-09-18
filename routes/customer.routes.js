import express from 'express';
import {
  createCustomer,deleteCustomer,updateCustomer,getAllCustomers,getCustomerByCode,getCustomerById
} from '../controllers/customer.controller.js';

const router = express.Router();

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.get('/customer/:code', getCustomerByCode);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
