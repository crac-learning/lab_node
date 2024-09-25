import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateUserAddressCreate } from '../../validations/userAddress'
import {
  create,
  deleteByKey,
  findSelectedByKey,
} from '../../queries/userAddress'

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

export const GetUserAddress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body

    const userAddress = await findSelectedByKey({ user: userId }, [
      'productsList.product',
    ])

    return res.status(StatusCodes.OK).json({
      error: null,
      data: userAddress,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const UpdateUserAddress = async (req: Request, res: Response) => {
  try {
    validateUserAddressCreate(req.body)

    const { user } = req.body

    const userAddress = await findSelectedByKey({ user }, [
      'productsList.product',
    ])

    return res.status(StatusCodes.OK).json({
      error: null,
      data: userAddress,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const DeleteUserAddress = async (req: Request, res: Response) => {
  try {
    const { addressId } = req.body

    const address = await deleteByKey({ _id: addressId })

    if (address) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: true,
      })
    } else {
      return res.status(StatusCodes.OK).json({
        error: 'Failed to delete address',
        data: null,
      })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}
