import mongoose from 'mongoose'
import { IUserPayment } from '../../models/userPayment'

export interface IUserPaymentObject extends IUserPayment {
  _id: mongoose.Types.ObjectId
}
