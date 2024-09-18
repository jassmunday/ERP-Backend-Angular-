import express from "express";
import { getAllMenus,getMenuById,addNewMenu,deleteMenu,updateMenu } from "../controllers/menu.controller.js";

const router = express.Router();

router.post('/',addNewMenu);
router.get('/',getAllMenus);
router.get('/:id',getMenuById);
router.put('/:id',updateMenu);
router.delete('/:id',deleteMenu);

export default router;