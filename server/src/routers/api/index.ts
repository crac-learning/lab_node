import express from 'express'

import AuthRoutes from './auth'
import ProductRoutes from './product'
import ProductReviewRoutes from './productReview'
import CartRoutes from './shoppingCart'
import UserAddressRoutes from './userAddress'
import UserProfileRoutes from './user'

const router = express.Router()

// public routes
router.use('/auth', AuthRoutes)
router.use('/products', ProductRoutes)
router.use('/review', ProductReviewRoutes)
router.use('/cart', CartRoutes)
router.use('/user-address', UserAddressRoutes)
router.use('/user', UserProfileRoutes)

export default router
