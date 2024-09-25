import express from 'express'
import {
  CreateCoupon,
  GetCoupon,
  DeleteCoupon,
} from '../../../controllers/coupon'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post-coupon', CreateCoupon)
router.post('/get-coupon', GetCoupon)
router.post('/delete-coupon', DeleteCoupon)

export default router
