import Joi from 'joi'

export const validateProfileUpdate = (productReviewData: Request) => {
  if (!productReviewData || Object.keys(productReviewData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    userId: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    newPassword: Joi.string().required(),
    oldPassword: Joi.string().required(),
  })

  return Schema.validateAsync(productReviewData)
}
