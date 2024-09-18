import express from "express";
import { createReligion,getAllReligions,getReligionById, updateReligion,deleteReligion } from "../controllers/religion.controller.js";
const router = express.Router();

router.post('/',createReligion);
router.get('/',getAllReligions);
router.get('/:id',getReligionById);
router.put('/:id',updateReligion);
router.delete('/:id',deleteReligion);

export default router;