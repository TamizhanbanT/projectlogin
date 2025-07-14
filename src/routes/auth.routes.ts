import { Router } from "express";
import * as AuthController from "../contollers/auth.controller";
const router =Router();

router.get('/signup',AuthController.showSignup);
router.post('/signup',AuthController.handleSignup);

router.get('/login',AuthController.showLogin);
router.post('/login',AuthController.handleLogin);

export default router;
