import express from 'express';
import {getAllFlats,getFlatById,createFlat,updateFlat,deleteFlat} from '../controllers/flat.controller.js'

const router = express.Router();

router.get('/',getAllFlats);
router.get('/:id',getFlatById);
router.post('/',createFlat);
router.put('/:id',updateFlat);
router.delete('/:id',deleteFlat);

export default router;
