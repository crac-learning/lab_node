import express from 'express'
import { UpdateProfile } from '../../../controllers/user'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/update-profile', UpdateProfile)

export default router
