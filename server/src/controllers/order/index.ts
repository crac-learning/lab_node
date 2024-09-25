import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateOrderCreate } from '../../validations/order'
import { create, deleteByKey, findSelectedByKey } from '../../queries/order'

// Controller function to create a new order
export const CreateOrder = async (req: Request, res: Response) => {
  try {
    validateOrderCreate(req.body)

    const order = await create(req.body)

    if (order) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: order,
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

export const GetUserOrder = async (req: Request, res: Response) => {
  try {
    const { user } = req.body

    const order = await findSelectedByKey({ user }, '', [''])

    return res.status(StatusCodes.OK).json({
      error: null,
      data: order,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const DeleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body

    const order = await deleteByKey({ _id: orderId })

    if (order) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: true,
      })
    } else {
      return res.status(StatusCodes.OK).json({
        error: 'Failed to delete order',
        data: null,
      })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}
