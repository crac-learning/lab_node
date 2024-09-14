import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { StatusCodes } from 'http-status-codes'
import { create, findByEmail, findSelectedByKey } from '../../queries/user'
import { validateSignIn, validateSignUp } from '../../validations/auth'
import { compareString, encodeString } from '../../utils/encrypt'
import { createJWTToken } from '../../services/jwtToken'
import { finalUser } from '../../utils/clearData'

// Controller function for sign up of a new user
export const signUpUser = async (req: Request, res: Response) => {
  try {
    await validateSignUp(req.body)

    const { email, password } = req.body

    const userPresentAlready = await findByEmail(email)

    if (userPresentAlready)
      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ data: null, error: 'User already exist' })

    const newPassword = await encodeString(password)
    const user = await create({
      ...req.body,
      password: newPassword,
    })

    if (user) {
      const token = createJWTToken(user.email, user._id.toString())
      const endUser = await finalUser(user)

      res
        .status(StatusCodes.OK)
        .json({ data: { user: endUser, token }, error: null })
    } else {
      res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ data: null, error: 'Error creating user' })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

// Controller function for login of an existing user
export const signInUser = async (req: Request, res: Response) => {
  try {
    await validateSignIn(req.body)

    const { email, password } = req.body

    // Find user by email or username
    const user = await findByEmail(email)

    if (!user)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: 'error', error: 'Invalid login credentials!!' })

    const isValidPassword = await compareString(password, user.password || '')

    if (isValidPassword) {
      const token = createJWTToken(user.email, user._id.toString())
      const endUser = await finalUser(user)

      return res.status(StatusCodes.OK).json({
        data: { user: endUser, token },
        error: null,
      })
    } else {
      res.status(StatusCodes.NOT_ACCEPTABLE).json({
        error: 'Username and password does not match!!',
        data: null,
      })
    }
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Internal Server Error',
      message: error.message,
    })
  }
}

/**
 * Connect token middleware to authenticate and load user profile.
 * This function attempts to authenticate a user based on the JWT token
 * provided in the Authorization header and retrieves the user's profile.
 *
 */

export const connectToken = async (req: Request, res: Response) => {
  try {
    // Attempt to extract the authorization token from the request headers
    const authToken = req.headers.authorization || ''

    // If the authorization token is missing, return an unauthorized error response
    if (!authToken) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ data: null, error: 'Authorization token is required' })
    }

    // Verify the JWT token and decode it to extract the username
    const verify = jwt.verify(
      authToken.replace('Bearer ', ''),
      process.env.JWTSECRET || ''
    )
    const email = (verify as { email: string }).email

    // Find the user in the database by the extracted username
    const userObj = await findSelectedByKey({ email }, '-password')

    // If the user cannot be found, return a not found error response
    if (!userObj) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ data: null, error: 'User not found' })
    }

    // Check if userInfo was successfully enriched and return the appropriate response

    res.status(StatusCodes.OK).json({
      data: { userInfo: userObj },
      error: null,
    })
  } catch (error: any) {
    // Catch and handle any errors that occur during the process
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ data: null, error: error.message })
  }
}
