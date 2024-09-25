import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validateProfileUpdate } from '../../validations/user'
import {
  findById,
  findSelectedByKey,
  updateUserDetails,
} from '../../queries/user'
import { compareString } from '../../utils/encrypt'

// Controller function to create a new shopping cart
export const UpdateProfile = async (req: Request, res: Response) => {
  try {
    validateProfileUpdate(req.body)

    const { userId, email, oldPassword } = req.body

    const user = await findById(userId)

    if (!user)
      res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ data: null, error: 'This user does not exist' })

    const emailExist = await findSelectedByKey({ email }, '', [''])

    if (emailExist)
      res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ data: null, error: 'This email already exist' })

    const validPassword = await compareString(oldPassword, user?.password || '')

    if (!validPassword)
      res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ data: null, error: 'Incorrect password' })

    const updatedProfile = await updateUserDetails({ _id: userId }, req.body)

    res.status(StatusCodes.OK).json({ data: updatedProfile, error: null })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}
