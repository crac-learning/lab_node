// import mongoose from 'mongoose'
import UserPayment, { IUserPayment } from '../../models/userPayment'
import { IUserPaymentObject } from './types'

/***
 * Retrieves all user payment from the database.
 *
 * @return Promise<IUserPaymentObject[] | null>: A promise that resolves with an array of user payment objects or null in case of an error.
 **/
export const read = async (): Promise<IUserPaymentObject[] | null> => {
  try {
    const result = await UserPayment.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new user payment in the database with the provided user payment data.
 *
 * @params user payment data (IUserPayment): An object containing the data for the new user payment.
 *
 * @return Promise<IUserPaymentObject | null>: A promise that resolves with the newly created user payment object or null in case of an error.
 **/
export const create = async (
  UserPaymentData: IUserPayment
): Promise<IUserPaymentObject | null> => {
  try {
    const mockUserPayment = new UserPayment(UserPaymentData)

    if (mockUserPayment) {
      const result = await mockUserPayment.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a user payment by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IUserPaymentObject | null> => {
  try {
    const userPayment = await UserPayment.findById(id).select(remove).exec()
    return userPayment
  } catch (error) {
    // console.error('Error in findByUserPaymentname', error)
    return null
  }
}

/***
 * Updates the 'details' of a user payment.
 **/
export const updateUserPaymentDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IUserPaymentObject | null> => {
  try {
    const updatedUserPaymentData = await UserPayment.findOneAndUpdate(
      query,
      obj
    ).exec()
    return updatedUserPaymentData
    // console.log(`UserPayment with email ${email} is now verified.`);
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string,
  toPopulate: string[]
): Promise<IUserPaymentObject[] | null> => {
  try {
    const userPayment = await UserPayment.find(query)
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
    await UserPayment.deleteOne(query).exec()
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
  updateUserPaymentDetails,
}
