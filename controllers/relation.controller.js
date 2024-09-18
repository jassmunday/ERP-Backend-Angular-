import mongoose from "mongoose";
import { Relation } from "../models/relation.model.js";

export const createRelation = async (req,res) => {
    try {
        const newRelation = new Relation(req.body);
        await newRelation.save();
        res.status(201).json({success:true,message:"Relation Created", newRelation})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 

export const getAllRelations = async (req, res) => {
  try {
    const relations = await Relation.find();
    return res.status(200).json(relations);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const updateRelation = async (req,res) => {
    try {
        const relation = await Relation.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!relation) return res.status(404).json({message:"No Such Relation"})
        return res.status(201).json({success:true,message:"Relation Updated", relation});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export const deleteRelation = async (req,res) => {
    try {
        const relation = await Relation.findByIdAndDelete(req.params.id);
        if(!relation) return res.status(404).json({message:"No Such Relation"})
        return res.status(201).json({success:true,message:"Deleted"});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}


export const getRelationById = async (req, res) => {
    try {
        const relation = await Relation.findById(req.params.id);
        if (!relation) return res.status(404).json({ message: 'Relation not found' });
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};