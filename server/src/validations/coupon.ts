import Joi from 'joi'
import { OfferTypes } from '../models/coupon'

export const validateCouponCreate = (userAddressData: Request) => {
  if (!userAddressData || Object.keys(userAddressData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    title: Joi.string().required(),
    code: Joi.string().required(),
    limited: Joi.boolean(),
    offerType: Joi.string()
      .valid(...Object.values(OfferTypes))
      .required(),
    offerValue: Joi.number().required(),
    minCartValue: Joi.number(),
    expired: Joi.boolean(),
  })

  return Schema.validateAsync(userAddressData)
}
