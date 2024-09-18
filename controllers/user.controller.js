import { User } from '../models/user.model.js';

// Create a new user
export const createUser = async (req,res) => {
  try {
    const {full_name, user_name, password, role, email, email_password, mobile_no, photo, company} = req.body;
    const newUser = new User({
        full_name,
        user_name,
        password,
        role,
        email,
        email_password,
        mobile_no,
        photo,
        company
    })
    await newUser.save();
    return res.status(200).json({
        success: true,
        message: "User Created",
        newUser
    })
  } catch (error) {
    return res.status(400).json({
        success: false,
        message:"Error while creating User",
        error
    })
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const { full_name, user_name, password, role, email, email_password, mobile_no, photo, company } = req.body;

    const updatedData = {
      full_name,
      user_name,
      password,
      role,
      email,
      email_password,
      mobile_no,
      photo,
      company,
    };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};
