import mongoose from 'mongoose'
import { IUser } from '../../models/user'

export interface IUserObject extends IUser {
  _id: mongoose.Types.ObjectId
}
