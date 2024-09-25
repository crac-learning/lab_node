// import mongoose from 'mongoose'
import ProductReview, { IProductReview } from '../../models/productReview'
import { IProductReviewObject } from './types'

// const ProductReview = mongoose.model('ProductReview')

/***
 * Retrieves all product review from the database.
 *
 * @return Promise<IProductReviewObject[] | null>: A promise that resolves with an array of product review objects or null in case of an error.
 **/
export const read = async (): Promise<IProductReviewObject[] | null> => {
  try {
    const result = await ProductReview.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new product review in the database with the provided product review data.
 *
 * @params product review data (IProductReview): An object containing the data for the new product review.
 *
 * @return Promise<IProductReviewObject | null>: A promise that resolves with the newly created product review object or null in case of an error.
 **/
export const create = async (
  ProductReviewData: IProductReview
): Promise<IProductReviewObject | null> => {
  try {
    const mockProductReview = new ProductReview(ProductReviewData)

    if (mockProductReview) {
      const result = await mockProductReview.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a productReview by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IProductReviewObject | null> => {
  try {
    const productReview = await ProductReview.findById(id).select(remove).exec()
    return productReview
  } catch (error) {
    // console.error('Error in findByProductReviewname', error)
    return null
  }
}

/***
 * Updates the 'details' of a productReview.
 **/
export const updateProductReviewDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IProductReviewObject | null> => {
  try {
    const updatedProductReviewData = await ProductReview.findOneAndUpdate(
      query,
      obj
    ).exec()
    return updatedProductReviewData
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string,
  toPopulate: string[]
): Promise<IProductReviewObject[] | null> => {
  try {
    const productReview = await ProductReview.find(query)
      .populate(toPopulate)
      .select(remove)
      .exec()
    return productReview
  } catch (error) {
    return null
  }
}

export default {
  read,
  create,
  findById,
  findSelectedByKey,
  updateProductReviewDetails,
}
