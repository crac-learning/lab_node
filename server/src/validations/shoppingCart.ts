import Joi from 'joi'

export const validateShoppingCartCreate = (shoppingCartData: Request) => {
  if (!shoppingCartData || Object.keys(shoppingCartData).length == 0) {
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
  })

  return Schema.validateAsync(shoppingCartData)
}
