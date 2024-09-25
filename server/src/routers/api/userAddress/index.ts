import express from 'express'
import {
  CreateUserAddress,
  GetUserAddress,
  DeleteUserAddress,
} from '../../../controllers/userAddress'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/post-address', CreateUserAddress)
router.post('/get-addresses', GetUserAddress)
router.post('/delete-addresses', DeleteUserAddress)

export default router
