// import mongoose from 'mongoose'
import Product, { IProduct } from '../../models/product'
import { IProductObject, IProductObjectWithRating } from './types'

// const Product = mongoose.model('Product')

/***
 * Retrieves all products from the database.
 *
 * @return Promise<IProductObject[] | null>: A promise that resolves with an array of product objects or null in case of an error.
 **/
export const read = async (): Promise<IProductObject[] | null> => {
  try {
    const result = await Product.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new product in the database with the provided product data.
 *
 * @params productData (IProduct): An object containing the data for the new product.
 *
 * @return Promise<IProductObject | null>: A promise that resolves with the newly created product object or null in case of an error.
 **/
export const create = async (
  ProductData: IProduct
): Promise<IProductObject | null> => {
  try {
    const mockProduct = new Product(ProductData)

    if (mockProduct) {
      const result = await mockProduct.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    console.log('eror in prouct', error)
    return null
  }
}

// Function to find a product by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IProductObject | null> => {
  try {
    const product = await Product.findById(id).select(remove).exec()
    return product
  } catch (error) {
    // console.error('Error in findByProductname', error)
    return null
  }
}

/***
 * Updates the 'details' of a product.
 **/
export const updateProductDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IProductObject | null> => {
  try {
    const updatedProductData = await Product.findOneAndUpdate(query, obj).exec()
    return updatedProductData
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string
): Promise<IProductObject[] | null> => {
  try {
    const product = await Product.find(query).select(remove).exec()
    return product
  } catch (error) {
    return null
  }
}

export const getProductWithRating = async (
  query: any
): Promise<IProductObjectWithRating[] | null> => {
  try {
    const products = await Product.aggregate([{ $match: query }]).lookup({
      from: 'ProductReview',
      localField: '_id',
      foreignField: 'product',
      as: 'reviews',
    })
    return products
  } catch (error) {
    return null
  }
}

export default {
  read,
  create,
  findById,
  findSelectedByKey,
  updateProductDetails,
}
