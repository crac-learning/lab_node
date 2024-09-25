import express from 'express'
import {
  CreateShoppingCart,
  GetUserCart,
} from '../../../controllers/shoppingCart'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post-cart', CreateShoppingCart)
router.post('/get-cart', GetUserCart)

export default router