import express from 'express'
import {
  CreateWishlist,
  GetWishlist,
  DeleteWishlist,
} from '../../../controllers/wishlist'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post-wishlist', CreateWishlist)
router.post('/user-wishlist', GetWishlist)
router.post('/delete-wishlist', DeleteWishlist)

export default router
