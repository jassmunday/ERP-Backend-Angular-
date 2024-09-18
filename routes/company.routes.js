import express from "express";
import { createCompany,getAllCompanies,getCompanyById,deleteCompany,updateCompany } from "../controllers/company.controller.js";
const router = express.Router();

router.post('/',createCompany);
router.get('/',getAllCompanies);
router.get('/:id',getCompanyById);
router.put('/:id',updateCompany);
router.delete('/:id',deleteCompany);

export default router;