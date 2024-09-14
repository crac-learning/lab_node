import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateShoppingCartCreate } from '../../validations/shoppingCart'
import { create } from '../../queries/shoppingCart'

// Controller function to create a new shopping cart
export const CreateShopping = async (req: Request, res: Response) => {
  try {
    validateShoppingCartCreate(req.body)

    const shoppingCart = await create(req.body)

    if (shoppingCart) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: shoppingCart,
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
