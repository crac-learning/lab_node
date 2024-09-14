import express from 'express'
import { connectToken, signInUser, signUpUser } from '../../../controllers/auth'

// Express router instance
const router = express.Router() // Global Router

// Define routes for user-related operations
router.post('/signup', signUpUser)
router.post('/login', signInUser)

router.get('/connect', connectToken)

export default router
