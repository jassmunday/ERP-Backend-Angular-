
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthUser } from '../models/auth.model.js';

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await AuthUser.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    user = await AuthUser.create({ username, email, password });

    //const token = user.getJWTToken();

    res.status(201).json({
      success: true,
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Please provide username and password!" });
    }

    const user = await AuthUser.findOne({ username }).select('+password');
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password!" });
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Invalid username or password!" });
    }

    const token = user.getJWTToken();
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };

    res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      user: {
        username: user.username,
        email: user.email,
      },
    });
    console.log()
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  
  export const isAuthenticated = async (req, res, next) => {

    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", ""); // Ensure token is fetched from cookies
   
    if (!token) {
      return res.status(401).json({ message: "Please login to access this resource!" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await AuthUser.findById(decoded.id);
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid or expired token!" });
    }
  };


  export const logoutUser = async (req, res) => {
    const options = {
        expires: new Date(Date.now()), 
        httpOnly: true,
      };
    res.cookie("token", null, options);
  
    res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  };