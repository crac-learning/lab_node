import Joi from 'joi'
import { CategoryTypes, GenderTypes } from '../models/product'

export const validateProductCreate = (productData: Request) => {
  if (!productData || Object.keys(productData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    sku: Joi.string().required(),
    banner: Joi.string().required(),
    images: Joi.array().items(Joi.string()).required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    mrp: Joi.number().required(),
    price: Joi.number().required(),
    category: Joi.string()
      .valid(...Object.values(CategoryTypes))
      .required(),
    gender: Joi.string()
      .valid(...Object.values(GenderTypes))
      .required(),
  })
  return Schema.validateAsync(productData)
}

export const validateProductSearch = (query: string) => {
  const Schema = Joi.object({
    searchTerm: Joi.string().required(),
  })

  return Schema.validateAsync(query)
}
