import express from "express";
import {signup2, signin, signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signup", signup2);

export default router;
