import Joi from 'joi'
import { PaymentStatusTypes } from '../models/order'

export const validateOrderCreate = (userAddressData: Request) => {
  if (!userAddressData || Object.keys(userAddressData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    user: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    productsList: Joi.array()
      .items(
        Joi.object({
          product: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
          quantity: Joi.number(),
        })
      )
      .required(),
    couponUsed: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
    totalValue: Joi.number().required(),
    finalValue: Joi.number().required(),
    paymentMethod: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    deliveryAddress: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    paymentStatus: Joi.string().valid(...Object.values(PaymentStatusTypes)),
    canceled: Joi.boolean(),
  })

  return Schema.validateAsync(userAddressData)
}
