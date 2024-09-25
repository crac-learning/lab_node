// import mongoose from 'mongoose'
import Order, { IOrder } from '../../models/order'
import { IOrderObject } from './types'

/***
 * Retrieves all order from the database.
 *
 * @return Promise<IOrderObject[] | null>: A promise that resolves with an array of order objects or null in case of an error.
 **/
export const read = async (): Promise<IOrderObject[] | null> => {
  try {
    const result = await Order.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new order in the database with the provided order data.
 *
 * @params order data (IOrder): An object containing the data for the new order.
 *
 * @return Promise<IOrderObject | null>: A promise that resolves with the newly created order object or null in case of an error.
 **/
export const create = async (
  OrderData: IOrder
): Promise<IOrderObject | null> => {
  try {
    const mockOrder = new Order(OrderData)

    if (mockOrder) {
      const result = await mockOrder.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a order by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IOrderObject | null> => {
  try {
    const userPayment = await Order.findById(id).select(remove).exec()
    return userPayment
  } catch (error) {
    // console.error('Error in findByOrdername', error)
    return null
  }
}

/***
 * Updates the 'details' of a order.
 **/
export const updateOrderDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IOrderObject | null> => {
  try {
    const updatedOrderData = await Order.findOneAndUpdate(query, obj).exec()
    return updatedOrderData
    // console.log(`Order with email ${email} is now verified.`);
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string,
  toPopulate: string[]
): Promise<IOrderObject[] | null> => {
  try {
    const userPayment = await Order.find(query)
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
    await Order.deleteOne(query).exec()
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
  updateOrderDetails,
}
