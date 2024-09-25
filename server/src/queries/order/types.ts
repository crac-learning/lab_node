import mongoose from 'mongoose'
import { IOrder } from '../../models/order'

export interface IOrderObject extends IOrder {
  _id: mongoose.Types.ObjectId
}
