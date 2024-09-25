import mongoose from 'mongoose'
import { IWhishlist } from '../../models/wishList'

export interface IWhishlistObject extends IWhishlist {
  _id: mongoose.Types.ObjectId
}
