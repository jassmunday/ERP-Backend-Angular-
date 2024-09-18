import { Registration } from '../models/registration.model.js';

// Create a new registration
export const addRegistration = async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(201).json(newRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all registrations
export const getRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single registration by ID
export const getRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }
        res.status(200).json(registration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a registration
export const updateRegistration = async (req, res) => {
    try {
        const updatedRegistration = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRegistration) {
            return res.status(404).json({ message: 'Registration not found' });
        }
        res.status(200).json(updatedRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a registration
export const deleteRegistration = async (req, res) => {
    try {
        const deletedRegistration = await Registration.findByIdAndDelete(req.params.id);
        if (!deletedRegistration) {
            return res.status(404).json({ message: 'Registration not found' });
        }
        res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error in Delete"+ error.message });
    }
};
