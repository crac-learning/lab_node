import express from 'express'
import {
  CreateUserPayment,
  GetUserPayments,
  UpdateUserPayment,
  DeleteUserPayment,
} from '../../../controllers/userPayment'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post-address', CreateUserPayment)
router.post('/get-addresses', GetUserPayments)
router.post('/delete-addresses', DeleteUserPayment)

export default router
