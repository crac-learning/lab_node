import express from 'express'
import { CreateProductReview } from '../../../controllers/productReview'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post', CreateProductReview)

export default router
