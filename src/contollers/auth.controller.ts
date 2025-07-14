import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const showSignup= (req:Request, res:Response) =>{
    res.render('signup')
};

export const showLogin = (req:Request, res:Response)=>{
    res.render('login');
};

export const handleSignup=async (req:Request, res:Response)=>{
    try{
        await AuthService.registerUser(req.body);
        res.redirect('/login');

    }catch{
        res.send("email already exist or something went wrong");

    }
};

export const handleLogin=async (req:Request, res:Response)=>{
    const user = await AuthService.validateUser(req.body);
    if(user){
        req.session.user=user;
        res.send(`welcome ${user.name}`)
    }else{
        res.send("invalid credentials")
    }
};





