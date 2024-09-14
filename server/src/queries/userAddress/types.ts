import mongoose from 'mongoose'
import { IUserAddress } from '../../models/userAddress'

export interface IUserAddressObject extends IUserAddress {
  _id: mongoose.Types.ObjectId
}
