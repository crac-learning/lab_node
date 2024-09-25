import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { validateUserPaymentCreate } from '../../validations/userPayment'
import {
  create,
  deleteByKey,
  findById,
  findSelectedByKey,
  updateUserPaymentDetails,
} from '../../queries/userPayment'

import { PaymentTypes } from '../../models/userPayment'

// Controller function to create a new user payment
export const CreateUserPayment = async (req: Request, res: Response) => {
  try {
    validateUserPaymentCreate(req.body)

    const { paymentType, cardDetails, upiId, bankingDetails } = req.body

    if (paymentType === 'card' && !cardDetails)
      return res.status(StatusCodes.EXPECTATION_FAILED).json({
        error: 'Card details are required',
        data: null,
      })

    if (paymentType === 'upi' && !upiId)
      return res.status(StatusCodes.EXPECTATION_FAILED).json({
        error: 'Card details are required',
        data: null,
      })

    if (paymentType === 'banking' && !bankingDetails)
      return res.status(StatusCodes.EXPECTATION_FAILED).json({
        error: 'Card details are required',
        data: null,
      })

    const payment = await create(req.body)

    if (payment) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: payment,
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

// Controller function to get user payments
export const GetUserPayments = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body

    const payments = await findSelectedByKey({ user: userId }, '', ['user'])

    return res.status(StatusCodes.OK).json({
      error: 'Unknown error occured',
      data: payments,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

// Controller function to create update user payment
export const UpdateUserPayment = async (req: Request, res: Response) => {
  try {
    validateUserPaymentCreate(req.body)

    const { id } = req.body

    const userPayment = await findById(id)

    if (userPayment) {
      const updatedPayment = await updateUserPaymentDetails(
        { _id: id },
        req.body
      )

      return res.status(StatusCodes.OK).json({
        error: null,
        data: updatedPayment,
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

// Controller function to delete user payment
export const DeleteUserPayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    const payment = await deleteByKey({ _id: id })

    if (payment) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: payment,
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
