import express from "express";
import { registerUser, loginUser, logoutUser, isAuthenticated} from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout",isAuthenticated, logoutUser);
router.get("/isAuthenticated", isAuthenticated, (req, res) => {
  res.status(200).json({
    success: true,
    message: "You are authenticated!",
    authenticated: true,
    user: req.user,
  });
});

export default router;
