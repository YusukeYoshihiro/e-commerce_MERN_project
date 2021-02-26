// ES5
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db.js');
// const products = require('./data/products');

// ES6 add type : "module" into package.jason
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';


dotenv.config();

connectDB();

const app = express();

// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next()
// })

app.get('/', (req, res) => {
  res.send('API is running....')
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(
  PORT, // PORT = process.env.PORT || 5000
  // ${process.env.NODE_ENV} => NODE_ENV = development
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);