import { Flat } from "../models/flat.model.js";

export const getAllFlats = async (req,res) => {
    try {
        const flats = await Flat.find();
        return res.status(200).json(flats);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export const createFlat = async (req,res) => {
    try {
        const newFlat = new Flat(req.body);
        newFlat.save();
        return res.status(200).json({success:true, message:"New Flat Added", newFlat})
    } catch (error) {
       res.status(400).json({success:false, message:"Error while creating Flats",error}) 
    }
}

export const updateFlat = async (req,res) => {
    try {
        const updatedFlat = await Flat.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatedFlat) return res.status(404).json({success:false, message:"No Such Flat"})
        return res.status(200).json({success:true, message:"Flat Upadated", updatedFlat})
    } catch (error) {
       res.status(400).json({success:false, message:"Error while creating Flats",error}) 
    }
}

export const deleteFlat = async (req,res) => {
    try {
        const flat = await Flat.findByIdAndDelete(req.params.id);
        if(!flat) return res.status(404).json({success:false, message:"No Such Flat"})
        return res.status(200).json({success:true, message:"Flat Deleted", })
    } catch (error) {
       res.status(400).json({success:false, message:"Error occoured While Deleting",error}) 
    }
}

export const getFlatById= async (req,res) => {
    try {
        const flat = await Flat.findById(req.params.id);
        if(!flat) return res.status(404).json({success:false, message:"Flat doesn't Exists"})
        return res.status(200).json({success:true, message:"Flat", });
    } catch (error) {
       res.status(400).json({success:false, message:"Error occoured While Deleting",error}) 
    }
}

