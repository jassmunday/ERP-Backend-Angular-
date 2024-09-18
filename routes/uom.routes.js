import express from 'express';
import { createUOM, getAllUOMs ,getUOMById, updateUOM, deleteUOM } from '../controllers/uom.controller.js';

const router = express.Router();

router.post('/', createUOM);
router.get('/', getAllUOMs);
router.get('/:id', getUOMById);
router.put('/:id', updateUOM);
router.delete('/:id', deleteUOM);

export default router;
