import mongoose from "mongoose";
import { Religion } from "../models/religion.model.js";

export const createReligion = async (req,res) => {
    try {
        const newReligion = new Religion(req.body);
        await newReligion.save();
        res.status(201).json({success:true,message:"Religion Created", newReligion})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 

export const getAllReligions = async (req, res) => {
  try {
    const religions = await Religion.find();
    return res.status(200).json(religions);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const updateReligion = async (req,res) => {
    try {
        const religion = await Religion.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!religion) return res.status(404).json({message:"No Such Religion"})
        return res.status(201).json({success:true,message:"Religion Updated", religion});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export const deleteReligion = async (req,res) => {
    try {
        const religion = await Religion.findByIdAndDelete(req.params.id);
        if(!religion) return res.status(404).json({message:"No Such Religion"})
        return res.status(201).json({success:true,message:"Deleted"});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}


export const getReligionById = async (req, res) => {
    try {
        const religion = await Religion.findById(req.params.id);
        if (!religion) return res.status(404).json({ message: 'Religion not found' });
        res.status(200).json(religion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};