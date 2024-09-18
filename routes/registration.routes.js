import express from 'express';
import {
    addRegistration,
    getRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration
} from '../controllers/registration.controller.js';

const router = express.Router();

router.post('/', addRegistration);
router.get('/', getRegistrations);
router.get('/:id', getRegistrationById);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);

export default router;
