import { Category } from "../models/category.model.js";

// Create a new category
export const createCategory = async (req, res) => {
    try {
        const { category_no, category_name } = req.body;

        // Create a new category instance
        const newCategory = new Category({ category_no, category_name });

        // Save the category to the database
        const savedCategory = await newCategory.save();

        // Return the saved category
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error creating category', error });
    }
};

// Get all categories
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
    }
};

// Get a category by ID
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category', error });
    }
};

// Update a category
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Category.findByIdAndUpdate(
            id, req.body,{ new: true, runValidators: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error });
    }
};

// Delete a category
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the category by ID and delete it
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error });
    }
};
