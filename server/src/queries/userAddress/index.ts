// import mongoose from 'mongoose'
import UserAddress, { IUserAddress } from '../../models/userAddress'
import { IUserAddressObject } from './types'

// const UserAddress = mongoose.model('UserAddress')

/***
 * Retrieves all user address from the database.
 *
 * @return Promise<IUserAddressObject[] | null>: A promise that resolves with an array of user address objects or null in case of an error.
 **/
export const read = async (): Promise<IUserAddressObject[] | null> => {
  try {
    const result = await UserAddress.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new user address in the database with the provided user address data.
 *
 * @params user address data (IUserAddress): An object containing the data for the new user address.
 *
 * @return Promise<IUserAddressObject | null>: A promise that resolves with the newly created user address object or null in case of an error.
 **/
export const create = async (
  UserAddressData: IUserAddress
): Promise<IUserAddressObject | null> => {
  try {
    const mockUserAddress = new UserAddress(UserAddressData)

    if (mockUserAddress) {
      const result = await mockUserAddress.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

// Function to find a user address by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IUserAddressObject | null> => {
  try {
    const userAddress = await UserAddress.findById(id).select(remove).exec()
    return userAddress
  } catch (error) {
    // console.error('Error in findByUserAddressname', error)
    return null
  }
}

/***
 * Updates the 'details' of a user address.
 **/
export const updateUserAddressDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IUserAddressObject | null> => {
  try {
    const updatedUserAddressData = await UserAddress.findOneAndUpdate(query, obj).exec()
    return updatedUserAddressData
    // console.log(`UserAddress with email ${email} is now verified.`);
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string
): Promise<IUserAddressObject | null> => {
  try {
    const userAddress = await UserAddress.findOne(query).select(remove).exec()
    return userAddress
  } catch (error) {
    return null
  }
}

export default {
  read,
  create,
  findById,
  findSelectedByKey,
  updateUserAddressDetails,
}
