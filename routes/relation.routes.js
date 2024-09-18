import express from "express";
import { getAllRelations,getRelationById,createRelation,updateRelation,deleteRelation } from "../controllers/relation.controller.js";
const router = express.Router();

router.post('/',createRelation);
router.get('/',getAllRelations);
router.get('/:id',getRelationById);
router.put('/:id',updateRelation);
router.delete('/:id',deleteRelation);

export default router;