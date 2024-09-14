import express from 'express'
import {
  ReadAllProducts,
  ReadFilteredProducts,
  BestSellerProducts,
  SearchProduct,
} from '../../../controllers/product'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.get('/products', ReadAllProducts)

router.get('/best-sellers', BestSellerProducts)

router.post('/search-product', SearchProduct)

router.post('/product-full', ReadFilteredProducts)

export default router
