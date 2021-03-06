import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// https://www.npmjs.com/package/express-async-handler
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

// @desc  Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error('Some error')
  res.json(products)
}));

// @desc  Fetch all products
// @route GET /api/products:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  // const product = products.find((p) =>  p._id === req.params.id)
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    // res.status(404).json({ message: 'Product not found' })
    res.status(404)
    throw new Error('Product not found')
  }

}))

export default router;
