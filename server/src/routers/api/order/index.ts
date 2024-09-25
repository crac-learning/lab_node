import express from 'express'
import {
  CreateOrder,
  GetUserOrder,
  DeleteOrder,
} from '../../../controllers/order'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post-order', CreateOrder)
router.post('/user-orders', GetUserOrder)
router.post('/delete-order', DeleteOrder)

export default router
