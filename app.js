import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import studentRoutes from './routes/student.routes.js';
import userRoutes from './routes/user.routes.js'
import registrationRoutes from './routes/registration.routes.js'
import companyRoutes from './routes/company.routes.js' ; 
import flatRoutes from './routes/flat.routes.js';
import categoryRoutes from './routes/category.routes.js';
import relationRoutes from './routes/relation.routes.js';
import religionRoutes from './routes/religion.routes.js';
import menuRoutes from './routes/menu.routes.js';

import customerRoutes from './routes/customer.routes.js';
import productRoutes from './routes/product.routes.js';
import uomRoutes from './routes/uom.routes.js';
import orderRoutes from './routes/orders.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();

//middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL, // Use FRONTEND_URL from .env
  credentials: true // Allow cookies and other credentials
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(cookieParser());

// Routes for Pages
app.use('/api', studentRoutes,userRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/flats',flatRoutes);
app.use('/api/categories',categoryRoutes);
app.use('/api/relations',relationRoutes);
app.use('/api/religions',religionRoutes);
app.use('/api/menus',menuRoutes);
app.use('/api/customers',customerRoutes);
app.use('/api/products',productRoutes);
app.use('/api/measurements',uomRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/auth',authRoutes);

export default app;
