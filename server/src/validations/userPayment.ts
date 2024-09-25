import Joi from 'joi'
import { CardTypes, PaymentTypes } from '../models/userPayment'

export const validateUserPaymentCreate = (userPaymentData: Request) => {
  if (!userPaymentData || Object.keys(userPaymentData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
    user: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    paymentType: Joi.string().valid(...Object.values(PaymentTypes)),
    cardDetails: Joi.object({
      cardType: Joi.string().valid(...Object.values(CardTypes)),
      number: Joi.string()
        .length(16)
        .pattern(/^[0-9]+$/),
      expiry: Joi.string(),
    }),
    upiId: Joi.string(),
    bankingDetails: Joi.object({
      bankName: Joi.string(),
      accountNumber: Joi.number(),
      accountName: Joi.string(),
      IFSCCode: Joi.string(),
    }),
  })

  return Schema.validateAsync(userPaymentData)
}
