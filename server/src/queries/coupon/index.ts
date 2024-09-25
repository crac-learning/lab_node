// import mongoose from 'mongoose'
import Coupon, { ICoupon } from '../../models/coupon'
import { ICouponObject } from './types'

/***
 * Retrieves all coupon from the database.
 *
 * @return Promise<ICouponObject[] | null>: A promise that resolves with an array of coupon objects or null in case of an error.
 **/
export const read = async (): Promise<ICouponObject[] | null> => {
  try {
    const result = await Coupon.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new coupon in the database with the provided coupon data.
 *
 * @params coupon data (ICoupon): An object containing the data for the new coupon.
 *
 * @return Promise<ICouponObject | null>: A promise that resolves with the newly created coupon object or null in case of an error.
 **/
export const create = async (
  CouponData: ICoupon
): Promise<ICouponObject | null> => {
  try {
    const mockCoupon = new Coupon(CouponData)

    if (mockCoupon) {
      const result = await mockCoupon.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a coupon by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<ICouponObject | null> => {
  try {
    const userPayment = await Coupon.findById(id).select(remove).exec()
    return userPayment
  } catch (error) {
    // console.error('Error in findByCouponname', error)
    return null
  }
}

/***
 * Updates the 'details' of a coupon.
 **/
export const updateCouponDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<ICouponObject | null> => {
  try {
    const updatedCouponData = await Coupon.findOneAndUpdate(query, obj).exec()
    return updatedCouponData
    // console.log(`Coupon with email ${email} is now verified.`);
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string,
  toPopulate: string[]
): Promise<ICouponObject[] | null> => {
  try {
    const userPayment = await Coupon.find(query)
      .populate(toPopulate)
      .select(remove)
      .exec()
    return userPayment
  } catch (error) {
    return null
  }
}

export const deleteByKey = async (query: any): Promise<Boolean | null> => {
  try {
    await Coupon.deleteOne(query).exec()
    return true
  } catch (error) {
    return null
  }
}

export default {
  read,
  create,
  findById,
  findSelectedByKey,
  deleteByKey,
  updateCouponDetails,
}
