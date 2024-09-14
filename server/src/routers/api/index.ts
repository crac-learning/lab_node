import express from 'express'

import AuthRoutes from './auth'
import ProductRoutes from './product'
import ProductReviewRoutes from './productReview'

const router = express.Router()

// public routes
router.use('/auth', AuthRoutes)
router.use('/products', ProductRoutes)
router.use('/review', ProductReviewRoutes)

export default router
