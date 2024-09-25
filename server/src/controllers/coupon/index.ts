import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateCouponCreate } from '../../validations/coupon'
import { create, deleteByKey, findSelectedByKey } from '../../queries/coupon'

// Controller function to create a new coupon
export const CreateCoupon = async (req: Request, res: Response) => {
  try {
    validateCouponCreate(req.body)

    const coupon = await create(req.body)

    if (coupon) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: coupon,
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

export const GetCoupon = async (req: Request, res: Response) => {
  try {
    const { couponCode } = req.body

    const coupon = await findSelectedByKey(
      { code: couponCode, expired: false },
      '',
      ['']
    )

    return res.status(StatusCodes.OK).json({
      error: null,
      data: coupon,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const DeleteCoupon = async (req: Request, res: Response) => {
  try {
    const { couponId } = req.body

    const coupon = await deleteByKey({ _id: couponId })

    if (coupon) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: true,
      })
    } else {
      return res.status(StatusCodes.OK).json({
        error: 'Failed to delete coupon',
        data: null,
      })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}
