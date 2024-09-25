import express from 'express'
import {
  CreateProductReview,
  GetProductReviews,
} from '../../../controllers/productReview'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post', CreateProductReview)
router.post('/get-reviews', GetProductReviews)

export default router
