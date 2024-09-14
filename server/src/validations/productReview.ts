import Joi from 'joi'

export const validateProductReviewCreate = (productReviewData: Request) => {
  if (!productReviewData || Object.keys(productReviewData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    product: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    user: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .required(),
    review: Joi.string(),
    rating: Joi.number().required(),
  })

  return Schema.validateAsync(productReviewData)
}
