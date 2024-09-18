// user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email_password: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // URL or path to the user's photo
  },
  company: {
    type: String,
    required: true,
  },
});


export const User = mongoose.model('User', userSchema);
