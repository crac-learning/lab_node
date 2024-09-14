import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateUserAddressCreate } from '../../validations/userAddress'
import { create } from '../../queries/userAddress'

// Controller function to create a new user address
export const CreateUserAddress = async (req: Request, res: Response) => {
  try {
    validateUserAddressCreate(req.body)

    const userAddress = await create(req.body)

    if (userAddress) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: userAddress,
      })
    } else {
      return res.status(StatusCodes.EXPECTATION_FAILED).json({
        error: 'Unknown error occured',
        data: null,
      })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}
