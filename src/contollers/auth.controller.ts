import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const showSignup = (req: Request, res: Response) => {
  const error = req.query.error;
  res.render('signup', { error });
};

export const showLogin = (req: Request, res: Response) => {
  const msg = req.query.msg;
  res.render('login', { msg });
};

export const handleSignup = async (req: Request, res: Response) => {
  try {
    await AuthService.registerUser(req.body);
    res.redirect('/login?msg=User registered successfully!');
  } catch {
    res.redirect('/signup?error=Email already exists or something went wrong');
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  const user = await AuthService.validateUser(req.body);
  if (user) {
    req.session.user = user;
    res.send(`Welcome ${user.name}`);
  } else {
    res.send("Invalid credentials");
  }
};
