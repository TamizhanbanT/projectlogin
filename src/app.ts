import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/auth.routes';

dotenv.config();
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  Parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

//  Session middleware 
app.use(session({
  secret: process.env.SESSION_SECRET!, // or 'your_secret_key' (only for testing)
  resave: false,
  saveUninitialized: true,
}));

// Your routes
app.use(authRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
