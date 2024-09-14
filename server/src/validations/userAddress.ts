import Joi from 'joi'

export const validateUserAddressCreate = (userAddressData: Request) => {
  if (!userAddressData || Object.keys(userAddressData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    user: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    pincode: Joi.number().required(),
  })

  return Schema.validateAsync(userAddressData)
}
