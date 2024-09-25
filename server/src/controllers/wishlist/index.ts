import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateWishlistCreate } from '../../validations/wishlist'
import { create, deleteByKey, findSelectedByKey } from '../../queries/wishlist'

// Controller function to create a new wishlist
export const CreateWishlist = async (req: Request, res: Response) => {
  try {
    validateWishlistCreate(req.body)

    const wishlist = await create(req.body)

    if (wishlist) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: wishlist,
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

export const GetWishlist = async (req: Request, res: Response) => {
  try {
    const { user } = req.body

    const wishlist = await findSelectedByKey({ user }, '', [''])

    return res.status(StatusCodes.OK).json({
      error: null,
      data: wishlist,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const DeleteWishlist = async (req: Request, res: Response) => {
  try {
    const { wishlistId } = req.body

    const wishlist = await deleteByKey({ _id: wishlistId })

    if (wishlist) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: true,
      })
    } else {
      return res.status(StatusCodes.OK).json({
        error: 'Failed to delete wishlist',
        data: null,
      })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}
