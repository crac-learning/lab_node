// import mongoose from 'mongoose'
import User, { IUser } from '../../models/user'
import { IUserObject } from './types'

// const User = mongoose.model('User')

/***
 * Retrieves all users from the database.
 *
 * @return Promise<IUserObject[] | null>: A promise that resolves with an array of user objects or null in case of an error.
 **/
export const read = async (): Promise<IUserObject[] | null> => {
  try {
    const result = await User.find({}).exec()
    return result
  } catch (err) {
    return null
  }
}

/***
 * Creates a new user in the database with the provided user data.
 *
 * @params userData (IUser): An object containing the data for the new user.
 *
 * @return Promise<IUserObject | null>: A promise that resolves with the newly created user object or null in case of an error.
 **/
export const create = async (userData: IUser): Promise<IUserObject | null> => {
  try {
    const mockUser = new User(userData)

    if (mockUser) {
      const result = await mockUser.save()
      return result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

/***
 * Finds a user by email.
 *
 * @params emailid (string): The email of the user to find.
 *
 * @return Promise<IUserObject | null>: A promise that resolves with the user object or null if not found or in case of an error.
 **/
export const findByEmail = async (
  emailid: string
): Promise<IUserObject | null> => {
  try {
    const user = await User.findOne({ email: emailid.toLowerCase() }).exec()
    return user
  } catch (error) {
    return null
  }
}

// Function to find a user by one field
export const findById = async (
  id: string,
  remove: string = ''
): Promise<IUserObject | null> => {
  try {
    const user = await User.findById(id).select(remove).exec()
    return user
  } catch (error) {
    // console.error('Error in findByUsername', error)
    return null
  }
}

// Function to update password,username, after verifying email
/***
 * Updates the 'password' status of a user identified by email.
 *
 * @params email (string): The email of the user whose 'isVerified' status needs to be updated.
 *
 * @return Promise<void>: A promise that resolves when the user's 'isVerified' status is updated.
 **/
export const updateUserDetails = async (
  query: any,
  obj: any,
  remove: string = ''
): Promise<IUserObject | null> => {
  try {
    const updatedUserData = await User.findOneAndUpdate(query, obj, {
      new: true,
    }).exec()
    return updatedUserData
    // console.log(`User with email ${email} is now verified.`);
  } catch (error) {
    throw error
  }
}

export const findSelectedByKey = async (
  query: any,
  remove: string,
  toPopulate: string[]
): Promise<IUserObject[] | null> => {
  try {
    const user = await User.find(query)
      .select(remove)
      .populate(toPopulate)
      .exec()
    return user
  } catch (error) {
    return null
  }
}

export default {
  read,
  create,
  findByEmail,
  findById,
  findSelectedByKey,
  updateUserDetails,
}
