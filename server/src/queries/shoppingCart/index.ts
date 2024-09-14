// import mongoose from 'mongoose'
import ShoppingCart, { IShoppingCart } from '../../models/shoppingCart'
import { IShoppingCartObject } from './types'

// const ShoppingCart = mongoose.model('ShoppingCart')

/***
 * Retrieves all shopping carts from the database.
 *
 * @return Promise<IShoppingCartObject[] | null>: A promise that resolves with an array of shopping cart objects or null in case of an error.
 **/
export const read = async (): Promise<IShoppingCartObject[] | null> => {
  try {
    const result = await ShoppingCart.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new shopping cart in the database with the provided shopping cart data.
 *
 * @params shopping cart data (IShoppingCart): An object containing the data for the new shopping cart.
 *
 * @return Promise<IShoppingCartObject | null>: A promise that resolves with the newly created shopping cart object or null in case of an error.
 **/
export const create = async (
  ShoppingCartData: IShoppingCart
): Promise<IShoppingCartObject | null> => {
  try {
    const mockShoppingCart = new ShoppingCart(ShoppingCartData)

    if (mockShoppingCart) {
      const result = await mockShoppingCart.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a shopping cart by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IShoppingCartObject | null> => {
  try {
    const shoppingCart = await ShoppingCart.findById(id).select(remove).exec()
    return shoppingCart
  } catch (error) {
    // console.error('Error in findByShoppingCartname', error)
    return null
  }
}

/***
 * Updates the 'details' of a shopping cart.
 **/
export const updateShoppingCartDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IShoppingCartObject | null> => {
  try {
    const updatedShoppingCartData = await ShoppingCart.findOneAndUpdate(query, obj).exec()
    return updatedShoppingCartData
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string
): Promise<IShoppingCartObject | null> => {
  try {
    const shoppingCart = await ShoppingCart.findOne(query).select(remove).exec()
    return shoppingCart
  } catch (error) {
    return null
  }
}

export default {
  read,
  create,
  findById,
  findSelectedByKey,
  updateShoppingCartDetails,
}
