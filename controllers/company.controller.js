import mongoose from "mongoose";
import { Company } from "../models/company.model.js";

export const createCompany = async (req,res) => {
    try {
        const newCompany = new Company(req.body);
        await newCompany.save();
        res.status(201).json({success:true,message:"Company Created", newCompany})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const updateCompany = async (req,res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!company) return res.status(404).json({message:"No Such Company"})
        return res.status(201).json({success:true,message:"Company Updated", company});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export const deleteCompany = async (req,res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if(!company) return res.status(404).json({message:"No Such Company"})
        return res.status(201).json({success:true,message:"Deleted"});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}


export const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};