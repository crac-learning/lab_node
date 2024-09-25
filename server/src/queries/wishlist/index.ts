// import mongoose from 'mongoose'
import Wishlist, { IWhishlist } from '../../models/wishList'
import { IWhishlistObject } from './types'

/***
 * Retrieves all wish list from the database.
 *
 * @return Promise<IWhishlistObject[] | null>: A promise that resolves with an array of wish list objects or null in case of an error.
 **/
export const read = async (): Promise<IWhishlistObject[] | null> => {
  try {
    const result = await Wishlist.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new wish list in the database with the provided wish list data.
 *
 * @params wish list data (IWhishlist): An object containing the data for the new wish list.
 *
 * @return Promise<IWhishlistObject | null>: A promise that resolves with the newly created wish list object or null in case of an error.
 **/
export const create = async (
  WishlistData: IWhishlist
): Promise<IWhishlistObject | null> => {
  try {
    const mockWishlist = new Wishlist(WishlistData)

    if (mockWishlist) {
      const result = await mockWishlist.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a wish list by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IWhishlistObject | null> => {
  try {
    const wishlist = await Wishlist.findById(id).select(remove).exec()
    return wishlist
  } catch (error) {
    // console.error('Error in findByWishlistname', error)
    return null
  }
}

/***
 * Updates the 'details' of a wish list.
 **/
export const updateWishlistDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IWhishlistObject | null> => {
  try {
    const updatedWishlistData = await Wishlist.findOneAndUpdate(
      query,
      obj
    ).exec()
    return updatedWishlistData
    // console.log(`Wishlist with email ${email} is now verified.`);
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string,
  toPopulate: string[]
): Promise<IWhishlistObject[] | null> => {
  try {
    const wishlist = await Wishlist.find(query)
      .populate(toPopulate)
      .select(remove)
      .exec()
    return wishlist
  } catch (error) {
    return null
  }
}

export const deleteByKey = async (query: any): Promise<Boolean | null> => {
  try {
    await Wishlist.deleteOne(query).exec()
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
  updateWishlistDetails,
}
